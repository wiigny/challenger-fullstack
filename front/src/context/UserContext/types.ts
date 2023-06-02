import { TUpdateContact } from "@/components/Modals/ModalContactUpdate/validator";
import { TAddContact } from "@/components/Modals/ModalContactAdd/validator";
import { TUserUpdate } from "@/components/Modals/ModalUserUpdate/validator";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserContextProps {
  user: IResponseUser | undefined;
  img: string;
  addContact: (data: TAddContact) => void;
  removeContact: (id: string) => void;
  updateContact: (id: string, data: TUpdateContact) => void;
  setUser: Dispatch<SetStateAction<IResponseUser | undefined>>;
  updateUser: (data: TUserUpdate) => void;
  setToken: Dispatch<SetStateAction<string | null>>;
  getUser: (
    id: string,
    authToken: string | null
  ) => Promise<IResponseUser | undefined>;
  updateImage: (file: File) => void;
}

export interface IResponseUser {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  avatar: null | string;
  id: string;
  contacts: IUserContacts[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface IUserContacts {
  createdAt: string;
  email: string | null;
  id: string;
  name: string;
  telephone: string;
  updatedAt: string;
}
export interface IDecoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}
