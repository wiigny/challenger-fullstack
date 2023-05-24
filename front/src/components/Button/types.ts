import { ReactNode } from "react";

export interface IButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  classes?: string;
  children: ReactNode;
}
