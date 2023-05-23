import { Router } from "express";
import {
  checkContactExists,
  checkToken,
  verifyDataMiddle,
} from "../../middlewares";
import { createContactSchema, updateContactSchema } from "../../schemas";
import {
  createContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
} from "../../controllers";

export const contactsRouter: Router = Router();

contactsRouter.use(checkToken);

contactsRouter.post(
  "",
  verifyDataMiddle(createContactSchema),
  createContactController
);

contactsRouter.get("", listContactsController);

contactsRouter.get("/:id", checkContactExists, retrieveContactController);

contactsRouter.patch(
  "/:id",
  checkContactExists,
  verifyDataMiddle(updateContactSchema),
  updateContactController
);

contactsRouter.delete("/:id", checkContactExists, deleteContactController);
