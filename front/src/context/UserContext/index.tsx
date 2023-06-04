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

import { TUserUpdate } from "@/components/Modals/ModalUserUpdate/validator";
import { TUpdateContact } from "@/components/Modals/ModalContactUpdate/validator";
import { TAddContact } from "@/components/Modals/ModalContactAdd/validator";
import { parseCookies } from "nookies";

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const router = useRouter();

  const [user, setUser] = useState<IResponseUser>();

  const [img, setImg] = useState<string>("");

  const cookies = parseCookies();

  const [token, setToken] = useState<string | undefined>(
    cookies.token_schedule
  );

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  useEffect(() => {
    (async () => {
      if (token === undefined) {
        return router.push("/login");
      }
      if (token) {
        const decoded: IDecoded = jwtDecode(token);

        getUser(decoded.sub);
      }
    })();
  }, [token]);

  const getUser = async (
    id: string,
    authToken: string | undefined = token
  ): Promise<IResponseUser | undefined> => {
    try {
      const response: { data: IResponseUser } = await api.get(`/clients/${id}`);

      setUser(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const addContact = async (data: TAddContact) => {
    if (data.email === "") {
      data = { name: data.name, telephone: data.telephone };
    }

    try {
      await api.post("/contacts", data);

      getUser(user!.id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (id: string, data: TUpdateContact) => {
    if (data.email === "") {
      data = { name: data.name, telephone: data.telephone };
    }

    try {
      await api.patch(`/contacts/${id}`, data);

      getUser(user!.id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const response = await api.patch(`/update-avatar`, formData);

      setImg(response.data.avatarUrl);

      user!.avatar = response.data.avatarUrl;
    } catch (error) {
      console.error(error);
    }
  };

  const removeContact = async (id: string) => {
    try {
      await api.delete(`/contacts/${id}`);

      getUser(user!.id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (data: TUserUpdate) => {
    const response = await api.patch(`/clients/${user!.id}`, data);

    setUser(response.data);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        img,
        addContact,
        removeContact,
        updateContact,
        setUser,
        updateUser,
        updateImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
