import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const verifyDataMiddle =
  (schema: ZodTypeAny) =>
  (req: Request, resp: Response, next: NextFunction): Response | void => {
    const verify = schema.parse(req.body);

    req.body = verify;

    return next();
  };
