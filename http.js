const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/fact.html");
});

app.post("/", (req, res) => {
  const { num } = req.body;
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  res.status(200).json({ fact });
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
