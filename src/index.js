import express from "express";
import "./config/database.js";
import userRoute from "./controller/userRoute.js";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
// API
app.use("/api/v1/users", userRoute);
app.use(errorHandler);



export default app;


