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
import { TAddContact } from "@/components/Modals/ModalAdd/validator";

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const router = useRouter();
  const getToken = localStorage.getItem("Token");

  const [user, setUser] = useState<IResponseUser>();
  const [token, setToken] = useState<string | null>(getToken);

  useEffect(() => {
    (async () => {
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
  }, [token]);

  const addContact = async (data: TAddContact) => {
    if (data.email === "") {
      data = { name: data.name, telephone: data.telephone };
    }

    const response = await api.post("/contacts", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    user?.contacts.push(response.data);

    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, addContact }}>
      {children}
    </UserContext.Provider>
  );
};
