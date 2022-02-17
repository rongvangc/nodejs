import cors from "cors";
import express from "express";
import morgan from "morgan";
import { testRouter } from "components/testApi/testRouters";

const app = express();

//Middleware
app.use(cors());
app.use(morgan("tiny")); // To check HTTP request logger middleware for node.js
app.use(express.json());

//Router config
app.use(testRouter);
