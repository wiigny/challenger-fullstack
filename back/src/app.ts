import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { clientsRouter } from "./routers";
import { errorHandle } from "./errors/errors";

export const app: Application = express();

app.use(express.json());

app.use("/users", clientsRouter);

app.use(errorHandle);
