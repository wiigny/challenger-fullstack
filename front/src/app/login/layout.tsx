import { AuthProvider } from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContext";
import { ReactNode } from "react";

interface ILayoutLogin {
  children: ReactNode;
}

export default function LayoutLogin({ children }: ILayoutLogin) {
  return (
    <UserProvider>
      <AuthProvider>
        <main>{children}</main>
      </AuthProvider>
    </UserProvider>
  );
}
