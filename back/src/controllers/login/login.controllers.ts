import { Response, Request } from "express";
import { TLoginRequest } from "../../interfaces";
import { postLoginService } from "../../services";

export const postLoginController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const request: TLoginRequest = req.body;

  const token = await postLoginService(request);

  return resp.status(200).json({ token });
};
