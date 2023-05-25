import { TLoginData } from "@/app/login/validator";
import { TRegisterData } from "@/app/register/validator";

export interface IAuthContextProps {
  userRegister: (data: TRegisterData) => Promise<void>;
  userLogin: (data: TLoginData) => Promise<void>;
}
