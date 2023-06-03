import { AuthProvider } from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContext";
import { ReactNode } from "react";

interface ILayoutLogin {
  children: ReactNode;
}

export default function LayoutLogin({ children }: ILayoutLogin) {
  return (
    <AuthProvider>
      <main className="h-full flex justify-center items-center">
        {children}
      </main>
    </AuthProvider>
  );
}
