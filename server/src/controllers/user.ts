import { User } from "../models/userModel.js";

export const userData = async () => {
  let user = await User.find();
  return user;
};

export const createUser = async () => {
  let user = await User.create({
    id: "101",
    name: "don Doe",
    email: "don123@gmail.com",
    password: "password",
    createdAt: "2021-09-09T12:00:00Z",
    updatedAt: "2021-09-09T12:00:00Z",
  });

  user = await user.save();
  return user;
};
