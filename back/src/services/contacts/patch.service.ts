import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { TUpdateContactRequired } from "../../interfaces";
import { updateContactSchema } from "../../schemas";

export const updateContactService = async (
  data: TUpdateContactRequired,
  ContactFounded: Contact
): Promise<any> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const findContact = ContactFounded;

  const update = contactRepo.create({
    ...findContact,
    ...data,
  });

  await contactRepo.save(update);

  const contactUpdated = updateContactSchema.parse(update);

  return contactUpdated;
};
