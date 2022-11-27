const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/operations.html");
});

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;
  const sum = Number(num1) + Number(num2);
  const sub = num1 - num2;
  const multiply = num1 * num2;
  const div = num1 / num2;
  res.status(200).json({ sum, sub, multiply, div });
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
