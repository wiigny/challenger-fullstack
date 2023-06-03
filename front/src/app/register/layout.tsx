import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

interface ILayoutRegister {
  children: ReactNode;
}

export default function LayoutRegister({ children }: ILayoutRegister) {
  return (
    <AuthProvider>
      <main className="h-full flex justify-center items-center">
        {children}
      </main>
    </AuthProvider>
  );
}
