import z from "zod";
import { loginSchema } from "../../schemas";

export type TLoginRequest = z.infer<typeof loginSchema>;
