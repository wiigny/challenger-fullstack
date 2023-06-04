"use client";

import { TRegisterData } from "@/app/register/validator";
import { api } from "@/services/api/api";
import { useRouter } from "next/navigation";
import { TLoginData } from "@/app/login/validator";
import { createContext } from "react";
import { IAuthContextProps, IAuthProviderProps } from "./types";
import { setCookie } from "nookies";

export const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const router = useRouter();

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);

      setCookie(null, "token_schedule", response.data.token, {
        maxAge: 30 * 60 * 60,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const userRegister = async (data: TRegisterData) => {
    try {
      await api.post("/clients", data);

      const response = await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      setCookie(null, "token_schedule", response.data.token, {
        maxAge: 30 * 60 * 60,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ userRegister, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
