import z from "zod";
import { returnClientCreatedSchema } from "..";

export const createContactSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email().max(40).nullish(),
  telephone: z.string().max(16),
});

export const createContactRequiredSchema = createContactSchema.required();

export const returnContactSchema = createContactSchema.extend({
  id: z.string(),
  client: returnClientCreatedSchema,
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
});

export const returnManyContactsSchema = returnContactSchema.array();

export const updateContactSchema = returnContactSchema.partial();

export const updateContactRequiredSchema = createContactSchema.required();
