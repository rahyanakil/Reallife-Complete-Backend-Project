import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({});

const UsersModel = mongoose.model("users", UserSchema);
export default UsersModel;
