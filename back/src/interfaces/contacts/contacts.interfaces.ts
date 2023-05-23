import z from "zod";
import {
  returnManyContactsSchema,
  createContactSchema,
  returnContactSchema,
  updateContactRequiredSchema,
  updateContactSchema,
  createContactRequiredSchema,
} from "../../schemas";

export type TCreateContact = z.infer<typeof createContactSchema>;

export type TCreateContactRequired = z.infer<
  typeof createContactRequiredSchema
>;

export type TReturnContact = z.infer<typeof returnContactSchema>;

export type TManyContacts = z.infer<typeof returnManyContactsSchema>;

export type TUpdateContact = z.infer<typeof updateContactSchema>;

export type TUpdateContactRequired = z.infer<
  typeof updateContactRequiredSchema
>;
