import z from "zod";
import {
  returnManyClientsSchema,
  createClientSchema,
  returnClientCreatedSchema,
  returnClientSchema,
  updateClientRequiredSchema,
  updateClientSchema,
} from "../../schemas";

export type TCreateClient = z.infer<typeof createClientSchema>;

export type TReturnClientCreated = z.infer<typeof returnClientCreatedSchema>;

export type TReturnClient = z.infer<typeof returnClientSchema>;

export type TManyClients = z.infer<typeof returnManyClientsSchema>;

export type TUpdateClient = z.infer<typeof updateClientSchema>;

export type TUpdateClientRequired = z.infer<typeof updateClientRequiredSchema>;
