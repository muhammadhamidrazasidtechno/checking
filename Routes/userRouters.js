import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
  verifyToken,
} from "../Controllers/userControllers.js";
import { verifyJWT } from "../Middlewares/authMiddleWares.js";
import upload from "../Middlewares/multerMiddlewares.js";

const router = Router();
// post
router.route("/register").post(upload.single("avatar"), registerUser);

router.route("/login").post(loginUser);
router.route("/verify_token").post(verifyToken);

// get
router.route("/getAllUsers").get(getAllUsers);
router.route("/:id").get(getUserById);

// put
router.route("/logout").put(verifyJWT, logoutUser);
router.route("/update/:id").put(upload.single("avatar"), updateUser);

// delete
router.route("/delete/:id").delete(deleteUser);

export default router;
