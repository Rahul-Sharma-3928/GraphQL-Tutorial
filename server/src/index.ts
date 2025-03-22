import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/database.js";
import { graphQLConnect } from "./graphQL/graphQLConnect.js";
// import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import morgan from "morgan";

const app = express();

// env variables path
dotenv.config({
  path: ".env",
});

//Database connection
connectDB(process.env.MONGO_URI!);

//GraphQL connection
graphQLConnect();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

const isAdmin = (req: Request, res: Response, next: NextFunction) => {};

//GraphQL middleware
// app.use("/graphql", expressMiddleware(server));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World rah!");
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Page Not Found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
