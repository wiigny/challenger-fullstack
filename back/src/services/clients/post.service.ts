import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors/errors";
import { TCreateClient, TReturnClientCreated } from "../../interfaces";
import { returnClientCreatedSchema } from "../../schemas";

export const createClientService = async (
  request: TCreateClient
): Promise<TReturnClientCreated> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const find = await clientRepo.findOneBy({ email: request.email });

  if (find) throw new AppError("Email already exists", 409);

  const clientCreated = clientRepo.create(request);

  await clientRepo.save(clientCreated);

  const clientPassOmited = returnClientCreatedSchema.parse(clientCreated);

  return clientPassOmited;
};
