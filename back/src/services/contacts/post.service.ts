import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import { TCreateContactRequired, TReturnContact } from "../../interfaces";
import { returnContactSchema } from "../../schemas";

export const createContactService = async (
  request: TCreateContactRequired,
  clientToken: Client
): Promise<TReturnContact> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contactCreated = contactRepo.create({
    ...request,
    client: clientToken,
  });

  await contactRepo.save(contactCreated);

  const contactPassOmited = returnContactSchema.parse(contactCreated);

  return contactPassOmited;
};
