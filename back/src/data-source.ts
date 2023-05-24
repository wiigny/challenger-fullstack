import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Missin env var: 'DATABASE_URL'");
  }

  if (nodeEnv === "local") {
    return {
      type: "postgres",
      url: dbUrl,
      synchronize: false,
      logging: true,
      entities: [entitiesPath],
      migrations: [migrationPath],
    };
  }

  return {
    type: "sqlite",
    database: "database.db",
    synchronize: true,
    entities: [entitiesPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
