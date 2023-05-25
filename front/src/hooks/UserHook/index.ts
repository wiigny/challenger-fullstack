"use client";

import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export const useContact = () => {
  return useContext(UserContext);
};
