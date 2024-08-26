import { DataSource } from "typeorm";
import { Country } from "../src/entities/Country";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [Country],
  synchronize: true,
});
