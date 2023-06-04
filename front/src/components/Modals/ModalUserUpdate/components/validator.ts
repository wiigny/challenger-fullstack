import z from "zod";

const userUpdateInfosSchema = z.object({
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

  email: z.string().email("Insira um email válido").max(40).optional(),
  telephone: z
    .string()
    .max(16, "Deve ter no máximo 16 caracteres")
    .min(8, "Deve ter no mínimo 8 caracteres")
    .optional(),
});

const userUpdatePassSchema = z
  .object({
    password: z
      .string()
      .min(8, "Deve ter no mínimo 8 caracteres")
      .max(50)
      .regex(/(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
      .regex(/(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
      .regex(/(?=.*[$*&@#])/, "Deve conter ao menos um caractere especial"),
    confirm: z.string().min(1, "É obrigatório a confirmação da nova senha"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });

export type TUserUpdateInfos = z.infer<typeof userUpdateInfosSchema>;
export type TUserUpdatePass = z.infer<typeof userUpdatePassSchema>;
export { userUpdateInfosSchema, userUpdatePassSchema };
