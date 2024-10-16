import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./Routes/userRouters.js";
import CompetencyEvaluationFormRouter from "./Routes/CompetencyEvaluationFormRouter.js";

const app = express();
app.use(
  cors({
    origin: "*", // Allows access from any origin
    credentials: true, // Allows credentials to be sent with requests
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(cookieParser());
app.use("/", async (req,res)=>{
  res.send("Welcome to my backend ")

});
app.use("/api/v1/user", UserRouter);
app.use(
  "/api/v1/CompetencyEvaluationFormRouter",
  CompetencyEvaluationFormRouter
);

export { app };
