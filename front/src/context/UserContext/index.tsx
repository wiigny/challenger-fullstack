"use client";

import { createContext, useEffect, useState } from "react";
import { api } from "@/services/api/api";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
import {
  IUserContextProps,
  IUserProviderProps,
  IResponseUser,
  IDecoded,
} from "./types";

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const router = useRouter();

  const [user, setUser] = useState<IResponseUser>();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("Token");
      const locationPath = window.location.pathname;

      if (locationPath === "/" && token === null) {
        return router.push("/login");
      }
      if (token) {
        const decoded: IDecoded = jwtDecode(token);

        const response = await api.get(`/clients/${decoded.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
