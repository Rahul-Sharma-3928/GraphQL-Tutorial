import { createUser, userData } from "../../controllers/user.js";

export const graphQLResolvers = {
  Query: {
    hello: () => "Hello World!",
    getUserData: userData,
    createUser: createUser,
  },
};
