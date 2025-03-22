import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { graphQLschema } from "./schema/graphQLschema.js";
import { graphQLResolvers } from "./resolvers/graphQLResolvers.js";

export const graphQLConnect = async () => {
  // Create a new ApolloServer instance and pass in the schema and resolvers
  const server = new ApolloServer({
    typeDefs: graphQLschema,
    resolvers: graphQLResolvers,
  });

  // Start the server
  startStandaloneServer(server, {
    listen: {
      port: Number(process.env.APOLLO_PORT),
    },
  });
};
