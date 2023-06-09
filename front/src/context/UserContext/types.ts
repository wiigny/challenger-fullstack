import { TUpdateContact } from "@/components/Modals/ModalContactUpdate/validator";
import { TAddContact } from "@/components/Modals/ModalContactAdd/validator";
import {
  TUserUpdateInfos,
  TUserUpdatePass,
} from "@/components/Modals/ModalUserUpdate/components/validator";
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
  updateUser: (data: TUserUpdateInfos | TUserUpdatePass) => void;
  updateImage: (file: File) => void;
  deleteUser: () => void;
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
