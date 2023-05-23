import jwt from "jsonwebtoken";
import { TLoginRequest } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors/errors";
import { compare } from "bcryptjs";

export const postLoginService = async (
  request: TLoginRequest
): Promise<string> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const findClient = await clientRepo.findOneBy({ email: request.email });

  if (!findClient) throw new AppError("Invalid credentials", 401);

  const checkPass = await compare(request.password, findClient.password);

  if (!checkPass) throw new AppError("Invalid credentials", 401);

  const token = jwt.sign(
    {
      email: findClient.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "72h",
      subject: findClient.id,
    }
  );

  return token;
};
