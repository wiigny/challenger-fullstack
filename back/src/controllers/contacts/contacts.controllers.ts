import { Request, Response } from "express";
import {
  createContactService,
  deleteContactService,
  listContactsService,
  retrieveContactService,
  updateContactService,
} from "../../services";
import { Client } from "../../entities";

export const createContactController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const request = req.body;
  const clientByToken: Client = resp.locals.clientToken;

  const newContact = await createContactService(request, clientByToken);

  return resp.status(201).json(newContact);
};

export const listContactsController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const listContact = await listContactsService();

  return resp.status(200).json(listContact);
};

export const retrieveContactController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const id = req.params.id;
  const contactFounded = resp.locals.contactFounded;

  const listContact = await retrieveContactService(id, contactFounded);

  return resp.status(200).json(listContact);
};

export const updateContactController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const reqData = req.body;
  const contactFounded = resp.locals.contactFounded;

  const updatedContact = await updateContactService(reqData, contactFounded);

  return resp.status(200).json(updatedContact);
};

export const deleteContactController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const contactFounded = resp.locals.contactFounded;

  await deleteContactService(contactFounded);

  return resp.status(204).send();
};
