import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: false,
  },
});

const userModel = mongoose.model("Users", UserSchema); //first param is document name

export default userModel;
