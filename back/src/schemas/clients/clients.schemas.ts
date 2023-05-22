import z from "zod";

export const createClientSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  password: z.string().min(8).max(50),
  email: z.string().email().max(40),
  telephone: z.string().max(16),
});

export const returnClientSchema = createClientSchema.extend({
  id: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
});

export const returnClientCreatedSchema = returnClientSchema.omit({
  password: true,
});

export const returnManyClientsSchema = returnClientCreatedSchema.array();

export const updateClientSchema = createClientSchema.partial();

export const updateClientRequiredSchema = updateClientSchema.required();
