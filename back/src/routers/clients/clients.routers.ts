import { Router } from "express";

import {
  checkClientExistsMiddlewares,
  verifyDataMiddle,
} from "../../middlewares";
import { createClientSchema, updateClientSchema } from "../../schemas";
import {
  createClientController,
  listClientsController,
  updateClientController,
  deleteClientController,
  retrieveClientController,
} from "../../controllers";

export const clientsRouter: Router = Router();

clientsRouter.post(
  "",
  verifyDataMiddle(createClientSchema),
  createClientController
);
clientsRouter.get("", listClientsController);
clientsRouter.get(
  "/:id",
  checkClientExistsMiddlewares,
  retrieveClientController
);
clientsRouter.patch(
  "/:id",
  checkClientExistsMiddlewares,
  verifyDataMiddle(updateClientSchema),
  updateClientController
);
clientsRouter.delete(
  "/:id",
  checkClientExistsMiddlewares,
  deleteClientController
);
