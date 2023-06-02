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

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const router = useRouter();

  const [user, setUser] = useState<IResponseUser>();

  const [img, setImg] = useState<string>("");

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("Token")
  );

  const getUser = async (
    id: string,
    authToken: string | null = token
  ): Promise<IResponseUser | undefined> => {
    try {
      const response: { data: IResponseUser } = await api.get(
        `/clients/${id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setUser(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      const locationPath = window.location.pathname;

      if (locationPath === "/" && token === null) {
        return router.push("/login");
      }
      if (token) {
        const decoded: IDecoded = jwtDecode(token);

        getUser(decoded.sub);
      }
    })();
  }, [token]);

  const addContact = async (data: TAddContact) => {
    if (data.email === "") {
      data = { name: data.name, telephone: data.telephone };
    }

    try {
      await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      await api.patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getUser(user!.id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const response = await api.patch(`/update-avatar`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setImg(response.data.avatarUrl);

      user!.avatar = response.data.avatarUrl;
    } catch (error) {
      console.error(error);
    }
  };

  const removeContact = async (id: string) => {
    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      getUser(user!.id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (data: TUserUpdate) => {
    const response = await api.patch(`/clients/${user!.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
        setToken,
        getUser,
        updateImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
