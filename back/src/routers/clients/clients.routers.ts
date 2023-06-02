import { Router } from "express";

import {
  checkClientExistsMiddlewares,
  checkImageUpload,
  checkToken,
  verifyDataMiddle,
} from "../../middlewares";
import { createClientSchema, updateClientSchema } from "../../schemas";
import {
  createClientController,
  listClientsController,
  updateClientController,
  deleteClientController,
  retrieveClientController,
  updateAvatarController,
} from "../../controllers";

export const clientsRouter: Router = Router();

export const clientsAvatarRouter: Router = Router();

clientsRouter.post(
  "",
  verifyDataMiddle(createClientSchema),
  createClientController
);

clientsRouter.get("", listClientsController);

clientsRouter.get(
  "/:id",
  checkClientExistsMiddlewares,
  checkToken,
  retrieveClientController
);

clientsRouter.patch(
  "/:id",
  checkClientExistsMiddlewares,
  checkToken,
  verifyDataMiddle(updateClientSchema),
  updateClientController
);

clientsRouter.delete(
  "/:id",
  checkClientExistsMiddlewares,
  checkToken,
  deleteClientController
);

clientsAvatarRouter.patch(
  "",
  checkToken,
  checkImageUpload.single("avatar"),
  updateAvatarController
);
