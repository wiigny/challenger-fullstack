import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors/errors";

export const checkClientExistsMiddlewares = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Client | void> => {
  const id = req.params.id;

  const clientRepo = AppDataSource.getRepository(Client);

  const clientExists = await clientRepo.findOneBy({
    id: id,
  });

  if (!clientExists) throw new AppError("detail: Not found.", 404);

  resp.locals.clientFounded = clientExists;

  return next();
};
