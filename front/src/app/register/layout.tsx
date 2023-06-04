import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

interface ILayoutRegister {
  children: ReactNode;
}

export default function LayoutRegister({ children }: ILayoutRegister) {
  return (
    <div
      className={`h-screen overflow-auto bg-gray-800 flex flex-col justify-center items-center`}
    >
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
