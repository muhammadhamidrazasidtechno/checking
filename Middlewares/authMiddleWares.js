import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import user from "../Models/UserModels.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "no Token");
    }
    let decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    if (!decodedToken) {
      throw new ApiError(401, "Invalid Token");
    }

    if (!decodedToken) {
      throw new ApiError(401, "Invalid Token");
    }
    req.deleteToken = token;
    const userdetail = await user
      .findById(decodedToken?._id)
      .select("-password -refreshtoken");
    if (!userdetail) {
      throw new ApiError(401, "Invalid Token");
    }

    req.userDetail = userdetail;

    next();
  } catch (error) {
    throw new ApiError(401, error.message || "invalidVFF token");
  }
});

const tokenGive = asyncHandler(async (req, res, next) => {
  try {
    if (!token) {
      throw new ApiError(401, "no Token");
    }
    let decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    const userdetail = await user
      .findById(decodedToken?._id)
      .select("-password");
    if (!userdetail) {
      throw new ApiError(401, "Invalid Token");
    }
    if (userdetail?.refreshtoken != token) {
      throw new ApiError(401, "refresh token is expired");
    }

    req.userDetail = userdetail;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "invalidVFF token");
  }
});

export { verifyJWT, tokenGive };
// import jwt from "jsonwebtoken"
// import ApiError from "../utils/ApiError"
// import asyncHandler from "../utils/asyncHandler"
// import user from "../Models/UserModels"

// const verifyJWT = asyncHandler((req,res,next) => {
//     try{
//     const token = req.cookies?.accesstoken || req.header.Authorization?.replace("Bearer ","")
//     if (!token) {
//         throw new ApiError(401,"no Token")

//     }
//     const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
//     const userdetail =user.findById(decodedToken?._id).select("-password -refreshtoken")

//     if(!userdetail){
//         throw new ApiError(401,"Invalid Token")
//     }

//     req.userDetail = userdetail

//     next()
// }
// catch(Error){

// }
// })

// export{
//     verifyJWT
// }
