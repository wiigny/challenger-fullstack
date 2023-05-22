import { deleteClientService } from "./clients/delete.service";
import {
  listClientsService,
  retrieveClientService,
} from "./clients/get.service";
import { updateClientService } from "./clients/patch.service";
import { createClientService } from "./clients/post.service";

export {
  createClientService,
  listClientsService,
  retrieveClientService,
  updateClientService,
  deleteClientService,
};
