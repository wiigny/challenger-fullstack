import { deleteClientService } from "./clients/delete.service";
import {
  listClientsService,
  retrieveClientService,
} from "./clients/get.service";
import { updateClientService } from "./clients/patch.service";
import { createClientService } from "./clients/post.service";
import { deleteContactService } from "./contacts/delete.service";
import {
  listContactsService,
  retrieveContactService,
} from "./contacts/get.service";
import { updateContactService } from "./contacts/patch.service";
import { createContactService } from "./contacts/post.service";
import { postLoginService } from "./login/post.service";

export {
  createClientService,
  listClientsService,
  retrieveClientService,
  updateClientService,
  deleteClientService,
  postLoginService,
  createContactService,
  updateContactService,
  deleteContactService,
  listContactsService,
  retrieveContactService,
};
