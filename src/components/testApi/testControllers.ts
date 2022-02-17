import { Request, Response } from "express";

export const getTestApiController = (_req: Request, res: Response) => {
  res.status(200).json({
    message: "GET TEST API DATA SUCCESS",
  });
};
