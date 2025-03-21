import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/schema/schema.js";
import { resolvers } from "./graphQL/resolvers/resolver.js";
import { connectDB } from "./database/database.js";

// Load environment variables from the .env file
dotenv.config({
  path: ".env",
});


// Connect to the MongoDB database
connectDB(process.env.MONGO_URI!);

// Create a new ApolloServer instance and pass in the schema and resolvers
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
});

// Start the server
startStandaloneServer(server, {
  listen: { port: Number(process.env.APOLLO_PORT) },
});
