import User from "../Models/UserModels.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

// Helper function to format user data
const formatUserResponse = (user) => ({
  id: user._id,
  password: user.password,
  name: `${user.first_name} ${user.last_name}`,
  first_name: user.first_name,
  last_name: user.last_name,
  avatar: user.avatar,
  email: user.email,
  position: user.position,
  role: user.role,
  last_login: user.last_login,
  two_steps: user.two_steps,
  joined_day: user.joined_day,
  online: user.online,
  api_token: user.currentToken,
});

// Register user
const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;
  const avatar = req?.file?.path;

  // Check for required fields
  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "password",
    "role",
  ];
  requiredFields.forEach((field) => {
    if (!req.body[field]) {
      throw new ApiError(400, `${field} is required`);
    }
  });

  if (!avatar) {
    throw new ApiError(400, "Avatar is missing");
  }

  // Check for existing email
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "Email already exists");
  }

  // Create new user
  const newUser = await User.create({
    avatar: `https://crmbackend.sidtechno.com/${avatar}`,
    first_name: first_name.toLowerCase(),
    last_name: last_name.toLowerCase(),
    email,
    password,
    role,
  });

  if (!newUser) {
    throw new ApiError(500, "Failed to register user");
  }

  const accessToken = newUser.TokenGenerate();
  newUser.token = accessToken;
  newUser.last_login = new Date();
  newUser.joined_day = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  await newUser.save();

  const options = { httpOnly: true, secure: true };
  return res
    .cookie("token", accessToken, options)
    .cookie("islogin", true, options)
    .status(201)
    .json(formatUserResponse(newUser));
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Username or password required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordCorrect = user.password == password;
  console.log(isPasswordCorrect);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Password does not match");
  }

  if (role !== user.role) {
    throw new ApiError(401, "Role does not match");
  }

  const userDetail = await User.findById(user._id).select(
    "-password -refreshtoken"
  );
  const accessToken = user.TokenGenerate();
  userDetail.token.push(accessToken);
  userDetail.last_login = new Date();
  userDetail.currentToken = accessToken;
  await userDetail.save();

  const options = { httpOnly: true, secure: true };
  return res
    .cookie("token", accessToken, options)
    .cookie("islogin", true, options)
    .status(200)
    .json(formatUserResponse(userDetail));
});

// Verify token
const verifyToken = asyncHandler(async (req, res) => {
  const { api_token } = req.body;

  if (!api_token) {
    throw new ApiError(401, "API token is missing");
  }

  const user = await User.findOne({ token: api_token });
  if (!user) {
    throw new ApiError(401, "API token does not match");
  }

  return res.status(200).json(formatUserResponse(user));
});

// Get all users with pagination, sorting, and searching
const getAllUsers = asyncHandler(async (req, res) => {
  let {
    page = 1,
    items_per_page = 10,
    sort = "createdAt",
    order = "desc",
    search = "",
  } = req.query;

  // if (req.userDetail.role != "CEO Level") {
  //   throw new ApiError(400, "Only Check Ceo");
  // }

  page = Math.max(1, parseInt(page, 10));
  items_per_page = Math.max(1, parseInt(items_per_page, 10));
  const sortOrder = order === "asc" ? 1 : -1;

  // Build the search query
  const query = search
    ? {
        $or: [
          { first_name: { $regex: new RegExp(search, "i") } },
          { last_name: { $regex: new RegExp(search, "i") } },
        ],
      }
    : {};

  // Sort field
  const sortField =
    sort === "name"
      ? [
          ["first_name", sortOrder],
          ["last_name", sortOrder],
        ]
      : [[sort, sortOrder]];

  try {
    // Fetch users with pagination
    const users = await User.find(query)
      .sort(sortField)
      .skip((page - 1) * items_per_page)
      .limit(items_per_page);

    const totalUsers = await User.countDocuments(query);
    const totalPages = Math.ceil(totalUsers / items_per_page);

    // Helper function to format last login
    const formatlast_login = (last_login) => {
      if (!last_login) return "Never";

      const last_loginDate = new Date(last_login);
      const now = new Date();
      const diffInSeconds = Math.floor((now - last_loginDate) / 1000);

      if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
      if (diffInSeconds < 3600)
        return `${Math.floor(diffInSeconds / 60)} minutes ago`;
      if (diffInSeconds < 86400)
        return `${Math.floor(diffInSeconds / 3600)} hours ago`;
      if (diffInSeconds < 2592000)
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
      if (diffInSeconds < 31536000)
        return `${Math.floor(diffInSeconds / 2592000)} months ago`;

      return `${Math.floor(diffInSeconds / 31536000)} years ago`;
    };

    // Format user data
    const formattedUsers = users.map((user) => {
      const formattedUser = formatUserResponse(user);
      formattedUser.last_login = formatlast_login(user.last_login); // Ensure last_login is used
      return formattedUser;
    });

    // Generate pagination links
    const links = [];
    for (let i = 1; i <= totalPages; i++) {
      links.push({
        url: i === page ? null : `/?page=${i}`,
        label: `${i}`,
        active: i === page,
        page: i,
      });
    }

    // Return response
    res.status(200).json({
      data: formattedUsers,
      payload: {
        pagination: {
          page,
          items_per_page,
          first_page_url: "/?page=1",
          from: (page - 1) * items_per_page + 1,
          last_page: totalPages,
          links: [
            {
              url: page > 1 ? `/?page=${page - 1}` : null,
              label: "&laquo; Previous",
              active: false,
              page: page > 1 ? page - 1 : null,
            },
            ...links,
            {
              url: page < totalPages ? `/?page=${page + 1}` : null,
              label: "Next &raquo;",
              active: false,
              page: page < totalPages ? page + 1 : null,
            },
          ],
          next_page_url: page < totalPages ? `/?page=${page + 1}` : null,
          prev_page_url: page > 1 ? `/?page=${page - 1}` : null,
          to: Math.min(page * items_per_page, totalUsers),
          total: totalUsers,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
});

// Logout user
const logoutUser = asyncHandler(async (req, res) => {
  const { deleteToken } = req;

  if (!deleteToken) {
    return res.status(400).json({ message: "Token is missing" });
  }

  await User.findByIdAndUpdate(req.userDetail._id, {
    $pull: { token: deleteToken },
  });
  res.send({ message: "Logged out successfully!" });
});

// Get user by ID
const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID is undefined." });
  }

  const user = await User.findById(id).select("-refreshtoken");
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Create a new object to return, replacing _id with id
  const responseData = {
    id: user._id, // Map _id to id
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    avatar: user.avatar,
    position: user.position,
    role: user.role,
    last_login: user.last_login,
    two_steps: user.two_steps,
    joined_day: user.joined_day,
    online: user.online,
  };

  return res.status(200).json({ data: responseData });
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "User ID is required.");
  }

  // Check if there's an avatar in the request
  let updates = { ...req.body }; // Spread the body fields

  // Handle avatar upload (check if file exists in the request)
  if (req.file) {
    const avatarPath = req.file.path; // Assuming `multer` stores the file with `req.file.path`
    updates.avatar = `https://crmbackend.sidtechno.com/${avatarPath}`;
    // Save avatar path to updates
  }

  console.log("Updates:", updates);

  const user = await User.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  }).select("-refreshtoken");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(formatUserResponse(user));
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Check if ID is provided
  if (!id) {
    return res.status(400).json({ error: "User ID is required." });
  }

  // Find and delete the user
  try {
    const user = await User.findByIdAndDelete(id);

    // If user not found
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Return success response
    return res.status(200).json({
      message: "User deleted successfully.",
      data: {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    // Return server error
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the user." });
  }
});

export {
  getUserById,
  logoutUser,
  registerUser,
  getAllUsers,
  loginUser,
  verifyToken,
  updateUser,
  deleteUser,
};
