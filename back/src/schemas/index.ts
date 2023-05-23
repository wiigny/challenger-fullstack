import {
  returnManyClientsSchema,
  createClientSchema,
  returnClientCreatedSchema,
  returnClientSchema,
  updateClientRequiredSchema,
  updateClientSchema,
} from "./clients/clients.schemas";
import {
  createContactSchema,
  returnContactSchema,
  returnManyContactsSchema,
  updateContactSchema,
  updateContactRequiredSchema,
  createContactRequiredSchema,
} from "./contacts/contacts.schemas";
import { loginSchema } from "./login/login.schemas";

export {
  createClientSchema,
  returnClientCreatedSchema,
  returnClientSchema,
  returnManyClientsSchema,
  updateClientSchema,
  updateClientRequiredSchema,
  loginSchema,
  createContactSchema,
  returnContactSchema,
  returnManyContactsSchema,
  updateContactSchema,
  updateContactRequiredSchema,
  createContactRequiredSchema,
};
