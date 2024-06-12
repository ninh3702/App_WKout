const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  givenName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  familyName: {
    type: String,
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
