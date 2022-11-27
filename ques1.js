const express = require("express");
const app = express();
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: ["demoKey1", "demoKey2"],
    maxAge: 60000,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "button.html");
});

app.get("/count", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send("No. of visits " + req.session.views);
  } else {
    req.session.views = 1;
    res.send("No. of visits " + req.session.views);
  }
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
