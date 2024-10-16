import { Schema, model, Types } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const CompetencyEvaluationFormSchema = new Schema(
  {
    comments: {
      type: String,
      required: true,
    },
    competencyRating: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CompetencyEvaluationForm = model(
  "CompetencyEvaluationForm",
  CompetencyEvaluationFormSchema
);
export default CompetencyEvaluationForm;
