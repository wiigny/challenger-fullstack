import z from "zod";

const registerSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  password: z
    .string()
    .min(8, "Deve ter no mínimo 8 caracteres")
    .max(50)
    .refine(
      (value) => /[a-z]/.test(value),
      "Deve conter ao menos uma letra minúscula"
    )
    .refine(
      (value) => /[A-Z]/.test(value),
      "Deve conter ao menos uma letra maiúscula"
    )
    .refine(
      (value) => /[$*&@#]/.test(value),
      "Deve conter ao menos um caractere especial"
    ),
  email: z.string().email().max(40),
  telephone: z.string().max(16).min(8),
});

export type TRegisterData = z.infer<typeof registerSchema>;
export default registerSchema;
