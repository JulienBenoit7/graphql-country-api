import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import { CountryResolver } from "../src/resolvers/CountryResolvers";
import { startStandaloneServer } from "@apollo/server/standalone";

const startServer = async () => {
  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server is running at ${url}`);
};

startServer().catch((err) => {
  console.error(err);
});
