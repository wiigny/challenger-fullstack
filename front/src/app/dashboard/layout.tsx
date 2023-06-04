import "@/styles/globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@/context/UserContext";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <Providers>{children}</Providers>
    </UserProvider>
  );
}
