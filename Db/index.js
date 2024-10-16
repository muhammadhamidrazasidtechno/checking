import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function DatabaseConnection() {
  try {
    const MongoUrl =
      "mongodb+srv://hamid123:hamid123@olx-backend.nbvhcx5.mongodb.net/";
    mongoose.connect(`${MongoUrl}${DB_NAME}`);

    console.log("app is listen on process.env.PORT");
  } catch (e) {
    console.log(e);
  }
}

export default DatabaseConnection;
