import { Router } from "express";
import {
  addData,
  getData,
} from "../Controllers/CompetencyEvaluationFormControllers.js";
import { verifyJWT } from "../Middlewares/authMiddleWares.js";

const router = Router();
// post
router.route("/add").post(verifyJWT, addData);

// get
router.route("/get").get(getData);

export default router;
