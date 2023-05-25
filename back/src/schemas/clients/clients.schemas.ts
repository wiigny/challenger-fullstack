import z from "zod";

export const createClientSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  password: z
    .string()
    .min(8)
    .max(50)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/),
  email: z.string().email().max(40),
  telephone: z.string().max(16),
});

export const returnClientSchema = createClientSchema
  .extend({
    id: z.string(),
    createdAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
    deletedAt: z.string().nullish(),
  })
  .omit({ password: true });

export const returnClientCreatedSchema = returnClientSchema.extend({
  contacts: z.array(
    z
      .object({
        id: z.string(),
        name: z.string().min(3).max(20),
        email: z.string().email().max(40).nullish(),
        telephone: z.string().max(16),
        createdAt: z.string().nullish(),
        updatedAt: z.string().nullish(),
        deletedAt: z.string().nullish(),
      })
      .partial()
  ),
});

export const returnManyClientsSchema = returnClientCreatedSchema.array();

export const updateClientSchema = createClientSchema.partial();

export const updateClientRequiredSchema = updateClientSchema.required();
