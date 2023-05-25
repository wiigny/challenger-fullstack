import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

interface ILayoutRegister {
  children: ReactNode;
}

export default function LayoutRegister({ children }: ILayoutRegister) {
  return (
    <AuthProvider>
      <main>{children}</main>
    </AuthProvider>
  );
}
