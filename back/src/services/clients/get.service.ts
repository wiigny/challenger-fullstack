import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors/errors";
import { TManyClients, TReturnClientCreated } from "../../interfaces";
import {
  returnManyClientsSchema,
  returnClientCreatedSchema,
} from "../../schemas";

const clientRepo = AppDataSource.getRepository(Client);

export const listClientsService = async (
  email: string | undefined
): Promise<TManyClients | TReturnClientCreated> => {
  let findClient: Client | null | Client[] = null;

  if (email) {
    findClient = await clientRepo.findOneBy({ email: email });

    if (!findClient) throw new AppError("Detail: Not Found.", 404);

    const findByEmail = returnClientCreatedSchema.parse(findClient);
    console.log(findByEmail);

    return findByEmail;
  }

  findClient = await clientRepo.find();

  const listClients = returnManyClientsSchema.parse(findClient);

  return listClients;
};

export const retrieveClientService = async (
  id: string,
  clientFounded: Client
): Promise<TReturnClientCreated> => {
  const findClient = clientFounded;

  const clientParsed = returnClientCreatedSchema.parse(findClient);

  return clientParsed;
};
