import z from "zod";

const loginSchema = z.object({
  password: z.string(),
  email: z.string().email(),
});

export type TLoginData = z.infer<typeof loginSchema>;
export default loginSchema;
