"use client";

import Form from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import loginSchema, { TLoginData } from "./validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/AuthHook";

export default function Login() {
  const { userLogin } = useAuth();

  const { register, handleSubmit } = useForm<TLoginData>({
    reValidateMode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const submit: SubmitHandler<TLoginData> = async (data) => {
    userLogin(data);
  };

  return (
    <Form submit={handleSubmit(submit)}>
      <Input
        type="email"
        placeholder="Insira seu email"
        label="E-mail"
        register={register("email")}
        required={false}
      />
      <Input
        type="password"
        placeholder="Insira seu password"
        label="password"
        register={register("password")}
        required={false}
      />
      <Button type="submit">Entrar</Button>
    </Form>
  );
}
