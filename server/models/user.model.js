import mongoose from "mongoose";
import { genSalt, hash } from "bcrypt";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  firstName: String,
  lastName: String,
  image: String,
  color: Number,
  profileSetup: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const saltRounds = 12;
    const salt = await genSalt(saltRounds);
    this.password = await hash(this.password, salt);
  }
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;
