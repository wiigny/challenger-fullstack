import z from "zod";

const addContactSchema = z.object({
  name: z.string().max(20, "Deve ter no máximo 20 caracteres"),
  email: z.string().optional(),
  telephone: z.string().max(16, "Deve ter no máximo 16 caracteres"),
});

export type TAddContact = z.infer<typeof addContactSchema>;
export default addContactSchema;
