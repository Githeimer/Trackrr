import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String,
  profilePhoto: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
