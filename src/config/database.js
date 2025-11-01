const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivanshtandonkkr_db_user:Shivansh_1503@devtinder.evgw0ao.mongodb.net/devTinder?retryWrites=true&w=majority&appName=devTinder"
  );
};

module.exports = connectDB;
