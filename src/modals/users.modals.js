import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
