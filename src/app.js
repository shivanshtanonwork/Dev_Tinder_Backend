const express = require("express");

const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  // Creating new instance of the User model
  const user = new User({
    firstName: "Aanvee",
    lastName: "Sood",
    emailId: "AanveeSood@gmail.com",
    password: "Aanvee@123",
  });
  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user : " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(7777, () => {
      console.log("Sever is successfully listening on port 7777...");
    });
  })
  .catch((err) => console.log(err));
