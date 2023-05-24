import { TRegisterData } from "@/app/register/validator";

export interface IAuthContextProps {
  userRegister: (data: TRegisterData) => Promise<void>;
}
