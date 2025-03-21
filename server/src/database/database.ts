import mongoose from "mongoose";

export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, {
      dbName: "graphql-tutorial",
    })
    .then((d) =>
      console.log(
        `Connected with database name ${d.connection.name} to MongoDB on ${d.connection.host}:${d.connection.port}`
      )
    )
    .catch((e) => console.log(e));
};
