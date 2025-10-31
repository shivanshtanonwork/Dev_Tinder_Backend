const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivanshtandonkkr_db_user:RZh6doFRATdu78ye@devtinder.evgw0ao.mongodb.net/?appName=devTinder"
  );
};

module.exports = connectDB;
