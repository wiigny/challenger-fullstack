import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors/errors";

export const checkClientExistsMiddlewares = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Client | void> => {
  const id = req.params.id;

  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidPattern.test(id))
    throw new AppError(`invalid input syntax for type uuid: ${id}`);

  const clientRepo = AppDataSource.getRepository(Client);

  const clientExists = await clientRepo.findOne({
    where: {
      id: id,
    },
  });

  if (!clientExists) throw new AppError("Client not found.", 404);

  resp.locals.clientFounded = clientExists;

  return next();
};
