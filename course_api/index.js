const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;

app.get("/mock-data", (_, res) => {
  const mockData = [
    {
      lessonName: "Lekcija 1",
      description: "Opis lekcije 1",
    },
    {
      lessonName: "Lekcija 2",
      description: "Opis lekcije 2",
    },
  ];

  res.send({
    data: mockData,
    message: "list of lessons",
  });
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(intialPath, "index.html"));
});
app.post("/login-user", (req, res) => {
  const { email, password } = req.body;

  db.select("name", "email")
    .from("users")
    .where({
      email: email,
      password: password,
    })
    .then((data) => {
      if (data.length) {
        res.json(data[0]);
      } else {
        res.json("email or password is incorrect");
      }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
