import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

export const deleteClientService = async (
  clientFounded: Client
): Promise<void> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const findClient = clientFounded;

  await clientRepo.remove(findClient);

  return;
};
