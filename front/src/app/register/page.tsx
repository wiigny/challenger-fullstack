"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import Form from "@/components/Form";
import registerSchema, { TRegisterData } from "./validator";
import Image from "next/image";
import bg from "../../assets/bg.jpg";
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
    <main className="w-4/5 h-4/5 m-auto flex flex-row-reverse items-center justify-center">
      <section className="w-full h-full sm:rounded-r-xl flex flex-col justify-center items-center sm:rounded-l-none p-5 rounded-xl bg-gray-200 overflow-auto">
        <Form submit={handleSubmit(submit)} classes="w-full h-max">
          <h1 className="text-2xl pb-8 font-bold text-gray-700">Registrar</h1>
          <Input
            type="text"
            placeholder="Digite seu nome"
            required={true}
            register={register("firstName")}
            label="Nome"
            fieldClasses={"w-full"}
          />
          {errors.firstName && (
            <p className="text-sm">{errors.firstName.message}</p>
          )}

          <Input
            type="text"
            placeholder="Digite seu sobrenome"
            required={true}
            register={register("lastName")}
            label="Sobrenome"
            fieldClasses={"w-full"}
          />
          {errors.lastName && (
            <p className="text-sm">{errors.lastName.message}</p>
          )}

          <Input
            type="email"
            placeholder="Digite um e-mail válido"
            label="E-mail"
            required={true}
            register={register("email")}
            fieldClasses={"w-full"}
          />
          {errors.email && <p className="text-sm">{errors.email.message}</p>}

          <Input
            type="password"
            placeholder="Digite sua senha"
            required={true}
            register={register("password")}
            label="Senha"
            fieldClasses={"w-full"}
          />
          {errors.password && (
            <p className="text-sm">{errors.password.message}</p>
          )}

          <Input
            type="tel"
            placeholder="Digite seu telefone"
            required={true}
            register={register("telephone")}
            label="Telefone"
            fieldClasses={"w-full"}
          />
          {errors.telephone && (
            <p className="text-sm">{errors.telephone.message}</p>
          )}

          <div className="w-full flex flex-col mt-8 mb-2 gap-2">
            <Button
              type="submit"
              classes="bg-[#54b9cb] hover:bg-[#348e9e] p-3 px-4 rounded-lg text-white text-center duration-300"
            >
              Registrar
            </Button>

            <p className="p-2 text-sm text-gray-500">Já possuí uma conta ?</p>

            <Link
              href={"/login"}
              className="p-2 border-solid border-2 border-[#54b9cb] text-center rounded-lg duration-300 hover:bg-[#54b9cb] hover:text-white"
            >
              Logar
            </Link>
          </div>
        </Form>
      </section>
      <section className="w-full h-full rounded-l-xl overflow-hidden hidden sm:block">
        <figure className="w-full h-full">
          <Image
            src={bg.src}
            alt="background"
            width={1000}
            height={1000}
            className="h-full object-cover blur-sm"
          />
        </figure>
      </section>
    </main>
  );
}
