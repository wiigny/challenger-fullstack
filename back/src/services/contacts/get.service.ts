import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { TManyContacts, TReturnContact } from "../../interfaces";
import { returnContactSchema, returnManyContactsSchema } from "../../schemas";

const contactRepo = AppDataSource.getRepository(Contact);

export const listContactsService = async (): Promise<TManyContacts> => {
  let findContact: Contact | null | Contact[] = null;

  findContact = await contactRepo.find({
    relations: {
      client: true,
    },
  });

  const listContacts = returnManyContactsSchema.parse(findContact);

  return listContacts;
};

export const retrieveContactService = async (
  id: string,
  ContactFounded: Contact
): Promise<TReturnContact> => {
  const findContact = ContactFounded;
  const contactParsed = returnContactSchema.parse(findContact);

  return contactParsed;
};
