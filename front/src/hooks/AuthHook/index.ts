"use client";

import { IAuthContextProps } from "@/context/AuthContext/types";
import { createContext } from "react";

export const AuthContext = createContext({} as IAuthContextProps);
