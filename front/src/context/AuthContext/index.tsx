"use client";

import { TRegisterData } from "@/app/register/validator";
import { api } from "@/services/api/api";
import { AuthContext } from "@/hooks/AuthHook";
import { useRouter } from "next/navigation";
import { TLoginData } from "@/app/login/validator";

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const router = useRouter();

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);

      localStorage.setItem("Token", response.data.token);

      router.push("/");
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

      localStorage.setItem("Token", response.data.token);

      router.push("/");
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
