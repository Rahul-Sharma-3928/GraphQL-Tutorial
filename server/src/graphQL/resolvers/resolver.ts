import { userData } from "../../controllers/user.js";

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    getUserData: userData,
  },
};
