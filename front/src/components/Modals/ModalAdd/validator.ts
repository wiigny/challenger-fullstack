import z from "zod";

const addContactSchema = z.object({
  name: z.string(),
  email: z.string().optional(),
  telephone: z.string().max(16),
});

export type TAddContact = z.infer<typeof addContactSchema>;
export default addContactSchema;
