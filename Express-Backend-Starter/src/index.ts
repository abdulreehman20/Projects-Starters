import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Env } from "./configs/env.config";
import { HTTPSTATUS } from "./configs/http.config";
import express, { Request, Response } from "express";
import { connectDatabase } from "./configs/database.config";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: Env.FRONTEND_ORIGIN, credentials: true, }));

app.get("/health", asyncHandler(async (req: Request, res: Response) => {
    res.status(HTTPSTATUS.OK).json({message: "Server is healthy", status: "OK"});
  })
);

app.use(errorHandler);

app.listen(Env.PORT, async () => {
  await connectDatabase();
  console.log(`Server running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
});

