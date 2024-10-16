import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function DatabaseConnection() {
  try {
   mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);

    console.log("app is listen on process.env.PORT");
  } catch (e) {
    console.log(e);
  }
}

export default DatabaseConnection;
