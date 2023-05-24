import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

interface ILayoutLogin {
  children: ReactNode;
}

export default function LayoutLogin({ children }: ILayoutLogin) {
  return (
    <AuthProvider>
      <main>{children}</main>
    </AuthProvider>
  );
}
