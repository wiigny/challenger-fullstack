"use client";

import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import loginSchema, { TLoginData } from "./validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/AuthHook";
import Image from "next/image";
import bg from "../../assets/bg.jpg";
import Link from "next/link";

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
    <main className="w-4/5 m-auto flex items-center justify-center h-screen">
      <section className="h-4/5 w-full sm:rounded-l-xl sm:rounded-r-none rounded-xl overflow-hidden">
        <Form
          submit={handleSubmit(submit)}
          classes="bg-gray-200 h-full flex flex-col items-start justify-center p-5"
        >
          <h1 className="text-2xl pb-8 font-bold text-gray-700">Login</h1>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            label="E-mail"
            register={register("email")}
            required={false}
            fieldClasses={"w-full"}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            register={register("password")}
            required={false}
            fieldClasses={"w-full"}
          />
          <div className="w-full flex flex-col mt-8 mb-2 gap-2">
            <Button
              type="submit"
              classes="bg-[#54b9cb] hover:bg-[#348e9e] p-3 px-4 rounded-lg text-white text-center duration-300"
            >
              Entrar
            </Button>
            <p className="text-sm text-gray-500">Caso não possua uma conta</p>
            <Link
              href={"/register"}
              type="submit"
              className="p-2 border-solid border-2 border-[#54b9cb] text-center rounded-lg duration-300 hover:bg-[#54b9cb] hover:text-white"
            >
              Registrar
            </Link>
          </div>
        </Form>
      </section>
      <section className="w-full h-4/5 rounded-r-xl hidden sm:block overflow-hidden">
        <figure className="w-full h-full ">
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
