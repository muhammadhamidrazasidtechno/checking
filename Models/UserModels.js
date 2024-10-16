import { Schema, model, Types } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userRoles from "../utils/constant.js";

const UserSchema = new Schema(
  {
    last_login: {
      type: Date,
    },
    joined_day: {
      type: String,
    },
    two_steps: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      default: [],
      type: [],
    },
    role: {
      type: String,
      enum: Object.values(userRoles),
      default: userRoles.USER_ROLES_AND_RESPONSIBILITIES,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// UserSchema.pre("save", function (next) {

//     if (this.isModified("password")) {
//         var salt = bcrypt.genSaltSync(10);
//         console.log(this.password);

//         var hash = bcrypt.hashSync(this.password, salt);
//         this.password = hash
//     }

//     next()
// })

// UserSchema.methods.isPasswordCorrect = function (password) {

//     return bcrypt.compareSync(password, this.password);
// }
UserSchema.methods.TokenGenerate = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
const user = model("User", UserSchema);
export default user;
