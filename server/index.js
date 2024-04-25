const express = require("express");
const app = express();

const PORT = 3001;

app.get("/auth/hello", (_req, res) => {
  res.send("hello");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`sever starting at http://localhost:${PORT}`);
});
