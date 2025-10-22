const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("handling the route user 1");
    next();
    res.send("1st Response");
  },
  (req, res, next) => {
    console.log("handling the route user 2");
    // res.send("2nd Response");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 3");
    // res.send("2nd Response");
    next();
  }
);

app.listen(7777, () => {
  console.log("Sever is successfully listening on port 7777...");
});
