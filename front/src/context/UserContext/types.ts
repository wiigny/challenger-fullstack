import { ReactNode } from "react";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserContextProps {
  user: IResponseUser | undefined;
}

export interface IResponseUser {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
export interface IDecoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}
