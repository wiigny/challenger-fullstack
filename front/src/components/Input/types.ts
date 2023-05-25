import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  type: string;
  placeholder: string;
  label: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  value?: string;
}
