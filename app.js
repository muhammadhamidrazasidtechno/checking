import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./Routes/userRouters.js";
import CompetencyEvaluationFormRouter from "./Routes/CompetencyEvaluationFormRouter.js";

const app = express();

// CORS configuration (specify allowed origins in production)
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? "*" : "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(cookieParser());

// Define routes
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/competency-evaluation", CompetencyEvaluationFormRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Export app
export { app };
