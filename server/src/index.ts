import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/database.js";

const app = express();

// env variables path
dotenv.config({
  path: ".env",
});

//Database connection
connectDB(process.env.MONGO_URI!);

app.get("/", (req, res) => {
  res.send("Hello World rah!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
