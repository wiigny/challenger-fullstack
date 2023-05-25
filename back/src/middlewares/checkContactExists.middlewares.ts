import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { AppError } from "../errors/errors";

export const checkContactExists = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Response | void> => {
  const idContact = req.params.id;

  const contactRepo = AppDataSource.getRepository(Contact);

  const findContact = await contactRepo.findOne({
    where: { id: idContact },
    relations: { client: true },
  });

  if (!findContact) throw new AppError("Contact not found.", 404);

  resp.locals.contactFounded = findContact;

  return next();
};
