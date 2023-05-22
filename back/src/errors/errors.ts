import { Request, Response, NextFunction } from "express";
import { QueryFailedError } from "typeorm";
import { ZodError } from "zod";

export class AppError extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const errorHandle = (
  err: Error,
  req: Request,
  resp: Response,
  next: NextFunction
): Response | void => {
  if (err instanceof AppError) {
    return resp.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return resp.status(400).json({
      message: err.flatten().fieldErrors,
    });
  }

  if (err instanceof QueryFailedError) {
    return resp.status(409).json({
      message: err.driverError.detail,
    });
  }

  console.error(err);

  return resp.status(500).json({
    message: "Internal Server Error",
  });
};
