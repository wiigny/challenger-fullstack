import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

interface ILayoutLogin {
  children: ReactNode;
}

export default function LayoutLogin({ children }: ILayoutLogin) {
  return (
    <div
      className={`h-screen bg-gray-800 flex flex-col justify-center items-center`}
    >
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
