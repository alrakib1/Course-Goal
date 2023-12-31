const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Course Goal Server!");
});

app.listen(port, () => {
  console.log(`course goal server running on : http://localhost:${port}`);
});
