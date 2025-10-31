const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    typeof: String,
  },
  lastName: {
    typeof: String,
  },
  emailId: {
    typeof: String,
  },
  password: {
    typeof: String,
  },
  age: {
    typeof: Number,
  },
  gender: {
    typeof: String,
  },
});

module.exports = mongoose.model("User", userSchema);
