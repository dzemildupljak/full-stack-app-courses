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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
