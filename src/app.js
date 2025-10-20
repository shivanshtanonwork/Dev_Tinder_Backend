const express = require("express");
const app = express();

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Shivansh", lastName: "Tandon" });
});

app.post("/user", (req, res) => {
  console.log("Save data to database");
  res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});
// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hi from server");
});

app.listen(7777, () => {
  console.log("Sever is successfully listening on port 3000...");
});
