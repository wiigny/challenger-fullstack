import { Response } from "express";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors/errors";
import { TCreateClient, TReturnClientCreated } from "../../interfaces";
import { returnClientCreatedSchema } from "../../schemas";

export const updateClientService = async (
  id: string,
  data: TCreateClient,
  clientFounded: Client
): Promise<TReturnClientCreated> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const findClient = clientFounded;

  const update = clientRepo.create({
    ...findClient,
    ...data,
  });

  await clientRepo.save(update);

  const clientUpdated = returnClientCreatedSchema.parse(update);

  return clientUpdated;
};
