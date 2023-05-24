"use client";

import { TRegisterData } from "@/app/register/validator";
import { api } from "@/services/api/api";
import { AuthContext } from "@/hooks/AuthHook";
import { redirect } from "next/navigation";

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const userRegister = async (data: TRegisterData) => {
    try {
      const response = await api.post("/clients", data);
      console.log(response);
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ userRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
