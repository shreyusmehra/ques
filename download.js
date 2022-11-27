const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/fileDownload.html");
});

app.post("/", (req, res) => {
  const { text } = req.body;
  res.download(__dirname + `/${text}.txt`);
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
