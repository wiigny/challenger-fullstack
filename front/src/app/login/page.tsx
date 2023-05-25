"use client";

import Form from "@/components/Form";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema, { TLoginData } from "./validator";
import { useContext } from "react";
import { AuthContext } from "@/hooks/AuthHook";
import Button from "@/components/Button";

export default function Login() {
  const { userLogin } = useContext(AuthContext);

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
