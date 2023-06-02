import {
  createClientController,
  deleteClientController,
  listClientsController,
  retrieveClientController,
  updateAvatarController,
  updateClientController,
} from "./clients/clients.controllers";
import {
  createContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
} from "./contacts/contacts.controllers";
import { postLoginController } from "./login/login.controllers";

export {
  createClientController,
  listClientsController,
  retrieveClientController,
  updateClientController,
  deleteClientController,
  postLoginController,
  createContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
  updateAvatarController,
};
