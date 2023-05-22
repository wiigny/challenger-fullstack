import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { TCreateClient, TReturnClientCreated } from "../../interfaces";
import { returnClientCreatedSchema } from "../../schemas";

export const createClientService = async (
  request: TCreateClient
): Promise<TReturnClientCreated> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const clientCreated = clientRepo.create(request);

  await clientRepo.save(clientCreated);

  const clientPassOmited = returnClientCreatedSchema.parse(clientCreated);

  return clientPassOmited;
};
