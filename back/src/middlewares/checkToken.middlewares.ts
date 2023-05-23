import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/errors";
import { Client } from "../entities";
import { AppDataSource } from "../data-source";

export const checkToken = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Response | void> => {
  const auth = req.headers.authorization;

  if (!auth) throw new AppError("Missing bearer token", 401);

  const token = auth.split(" ")[1];

  if (!token) throw new AppError("jwt must be provided", 401);

  verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
    try {
      if (err) throw new AppError(err.message, 401);

      resp.locals.idClient = decoded.sub;
      resp.locals.admin = decoded.adm;
    } catch (error) {
      return resp.status(401).json({
        message: err.message,
      });
    }
  });

  const client: Client = resp.locals.clientFounded;
  const idToken: string = resp.locals.idClient;

  const clientRepo = AppDataSource.getRepository(Client);
  const checkClientToken = await clientRepo.findOneBy({ id: idToken });

  resp.locals.clientToken = checkClientToken;

  if (req.baseUrl.includes("/contacts")) {
    return next();
  }

  if (client.id === checkClientToken?.id) {
    return next();
  } else {
    throw new AppError("Insufficient permission", 403);
  }
};
