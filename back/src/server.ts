import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected");

    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
      console.log("Server is Running!");
    });
  })
  .catch((err) => console.error(err));
