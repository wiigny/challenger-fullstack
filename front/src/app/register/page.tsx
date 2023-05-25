"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import Form from "@/components/Form";
import registerSchema, { TRegisterData } from "./validator";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/AuthHook";

export default function Register() {
  const { userRegister } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema),
    reValidateMode: "onChange",
  });

  const submit: SubmitHandler<TRegisterData> = async (data) => {
    userRegister(data);
  };

  return (
    <Form submit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Insert your first name"
        required={true}
        register={register("firstName")}
        label="First Name"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <Input
        type="text"
        placeholder="Insert your last name"
        required={true}
        register={register("lastName")}
        label="Last Name"
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <Input
        type="email"
        placeholder="Insert your email"
        label="E-mail"
        required={true}
        register={register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Input
        type="password"
        placeholder="Insert your password"
        required={true}
        register={register("password")}
        label="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <Input
        type="tel"
        placeholder="Insert your telephone"
        required={true}
        register={register("telephone")}
        label="Telephone"
      />
      {errors.telephone && <p>{errors.telephone.message}</p>}

      <Button
        type="submit"
        classes="p-2 border-solid border-2 border-sky-600 rounded-lg"
      >
        Registrar
      </Button>

      <p className="p-2">Já possuí uma conta ?</p>

      <Link
        href={"/login"}
        className="p-2 border-solid border-2 border-sky-600 rounded-lg"
      >
        Entrar
      </Link>
    </Form>
  );
}
