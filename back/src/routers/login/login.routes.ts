import { Router } from "express";
import { postLoginController } from "../../controllers";
import { verifyDataMiddle } from "../../middlewares";
import { loginSchema } from "../../schemas";

export const loginRouter: Router = Router();

loginRouter.post("", verifyDataMiddle(loginSchema), postLoginController);
