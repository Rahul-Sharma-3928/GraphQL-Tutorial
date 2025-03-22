import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, readonly: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  createdAt: String,
  updatedAt: String,
});
export const User = mongoose.model("User", userSchema);