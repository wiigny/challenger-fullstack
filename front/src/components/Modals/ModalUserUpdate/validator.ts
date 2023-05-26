import z from "zod";

const userUpdateSchema = z.object({
  firstName: z
    .string()
    .min(3, "Deve ter no mínimo 3 caracteres")
    .max(20, "Deve ter no máximo 20 caracteres")
    .optional(),
  lastName: z
    .string()
    .min(3, "Deve ter no mínimo 3 caracteres")
    .max(20, "Deve ter no máximo 20 caracteres")
    .optional(),
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
    )
    .optional(),
  email: z.string().email("Insira um email válido").max(40).optional(),
  telephone: z
    .string()
    .max(16, "Deve ter no máximo 16 caracteres")
    .min(8, "Deve ter no mínimo 8 caracteres")
    .optional(),
});

export type TUserUpdate = z.infer<typeof userUpdateSchema>;
export default userUpdateSchema;
