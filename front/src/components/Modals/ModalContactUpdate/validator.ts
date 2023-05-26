import z from "zod";

const updateContactSchema = z.object({
  name: z.string().max(20, "Deve ter no máximo 20 caracteres"),
  email: z.string().optional(),
  telephone: z.string().max(16, "Deve ter no máximo 20 caracteres"),
});

export type TUpdateContact = z.infer<typeof updateContactSchema>;
export default updateContactSchema;
