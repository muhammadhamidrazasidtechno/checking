import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import CompetencyEvaluationForm from "../Models/CompetencyEvaluationFormModels.js";
import moment from "moment";

const addData = asyncHandler(async (req, res) => {
  const { comments, competencyRating } = req.body;
  console.log(comments, competencyRating);

  if (!comments || !competencyRating) {
    throw new ApiError(400, "All fields are required");
  }

  const newData = await CompetencyEvaluationForm.create({
    comments,
    competencyRating,
    name: `${req.userDetail.first_name} ${req.userDetail.last_name}`, // Using template literals for readability
    date: new Date(),
  });
  return res
    .status(201)
    .json(new ApiResponse(200, newData, "Data Add Successfully"));
});

const getData = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalItems = await CompetencyEvaluationForm.countDocuments();
  const totalPages = Math.ceil(totalItems / limit);

  const data = await CompetencyEvaluationForm.find()
    .skip(skip)
    .limit(limit)
    .sort({ date: -1 })
    .select("-updatedAt -createdAt");

  if (!data.length) {
    throw new ApiError(404, "No data found");
  }

  // Check the data and format the date with day
  const formattedData = data.map((item) => {
    const formattedDate = moment(item.date).format("YYYY-MM-DD HH:mm:ss");
    const dayName = moment(item.date).format("dddd");

    return {
      ...item.toObject(),
      date: formattedDate + " " + dayName,
    };
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalItems,
        totalPages,
        currentPage: page,
        data: formattedData,
      },
      "Data retrieved successfully"
    )
  );
});

export { addData, getData };
