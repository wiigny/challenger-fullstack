import { unlink } from "fs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { TCreateClient, TReturnClientCreated } from "../../interfaces";
import { returnClientCreatedSchema } from "../../schemas";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import { AppError } from "../../errors/errors";

export const updateClientService = async (
  data: TCreateClient,
  clientFounded: Client
): Promise<TReturnClientCreated> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const findClient = clientFounded;

  const update = clientRepo.create({
    ...findClient,
    ...data,
  });

  await clientRepo.save(update);

  const clientUpdated = returnClientCreatedSchema.parse(update);

  return clientUpdated;
};

export const uploadAvatarService = async (
  file: Express.Multer.File | undefined,
  resp: Response,
  req: Request
) => {
  if (req.file === undefined) {
    throw new AppError(
      "Tipo de arquivo não suportado, certifique-se de passar arquivos .png, .jpeg, .jpg",
      400
    );
  }

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME!,
    api_key: process.env.API_KEY!,
    api_secret: process.env.API_SECRET!,
  });

  const pathImage = file?.path!;

  const result = await cloudinary.uploader.upload(
    pathImage,
    (error, result) => {
      if (error) {
        return error;
      } else {
        return result;
      }
    }
  );

  unlink(pathImage, (err) => err && console.log(err));

  const clientRepo = AppDataSource.getRepository(Client);
  const client: Client = resp.locals.clientToken;

  const updateAvatar = clientRepo.create({
    ...client,
    avatar: result.secure_url,
  });

  await clientRepo.save(updateAvatar);

  return { avatarUrl: result.secure_url };
};
