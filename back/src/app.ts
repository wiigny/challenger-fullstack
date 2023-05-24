import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import {
  clientsRouter,
  contactsRouter,
  loginRouter,
  swaggerRouter,
} from "./routers";
import cors from "cors";
import { errorHandle } from "./errors/errors";

export const app: Application = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerRouter);

app.use("/clients", clientsRouter);

app.use("/contacts", contactsRouter);

app.use("/login", loginRouter);

app.use(errorHandle);
