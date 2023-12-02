const express = require("express");
const app = express();
const port = 3000;
const ports = [3003, 3004, 3005];
const port2 = 3001;

app.get("/", (req, res) => {
  res.send("Hi! I'm Paul!");
});

app.get("/test", (req, res) => {
  res.send("Test!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});

ports.forEach((port) => {
  console.log(port);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});