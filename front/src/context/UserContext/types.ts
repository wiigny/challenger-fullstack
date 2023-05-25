import { TAddContact } from "@/components/Modals/ModalAdd/validator";
import { ReactNode } from "react";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserContextProps {
  user: IResponseUser | undefined;
  addContact: (data: TAddContact) => void;
}

export interface IResponseUser {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
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
