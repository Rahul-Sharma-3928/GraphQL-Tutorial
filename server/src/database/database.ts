import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  const database = await mongoose.connect(uri, {
    dbName: "graphql-tutorial",
  });
  console.log(
    `Connected with database name ${database.connection.name} to MongoDB on ${database.connection.host}:${database.connection.port}`
  );
};
