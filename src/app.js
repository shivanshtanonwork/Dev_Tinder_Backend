const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Shivansh", lastName: "Tandon" });
});

app.listen(7777, () => {
  console.log("Sever is successfully listening on port 3000...");
});
