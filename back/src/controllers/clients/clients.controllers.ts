import { Request, Response } from "express";
import {
  createClientService,
  deleteClientService,
  listClientsService,
  retrieveClientService,
  updateClientService,
} from "../../services";

export const createClientController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const request = req.body;

  const newClient = await createClientService(request);

  return resp.status(201).json(newClient);
};

export const listClientsController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const email = req.query.email as string | undefined;

  const listClient = await listClientsService(email);

  return resp.status(200).json(listClient);
};

export const retrieveClientController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const id = req.params.id;
  const clientFounded = resp.locals.clientFounded;

  const listClient = await retrieveClientService(id, clientFounded);

  return resp.status(200).json(listClient);
};

export const updateClientController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const reqData = req.body;

  const clientFounded = resp.locals.clientFounded;

  const updatedClient = await updateClientService(reqData, clientFounded);

  return resp.status(200).json(updatedClient);
};

export const deleteClientController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const clientFounded = resp.locals.clientFounded;

  await deleteClientService(clientFounded);

  return resp.status(204).send();
};
