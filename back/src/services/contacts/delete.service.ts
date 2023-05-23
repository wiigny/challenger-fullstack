import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

export const deleteContactService = async (
  contactFounded: Contact
): Promise<void> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const findContact = contactFounded;

  await contactRepo.remove(findContact);

  return;
};
