const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const initialRoute = require("./routes/route1.js");

app.use("/initialRoute", initialRoute);

app.get("/", (req, res) => {
  let info = [
    {
      concept: "Ir al cine",
      date: "20/7/2021",
      amount: -250,
      type: "expense",
    },
    {
      concept: "Plazo Fijo",
      date: "5/7/2021",
      amount: 2500,
      type: "income",
    },
    {
      concept: "Comida del perro",
      date: "13/8/2021",
      amount: -400,
      type: "expense",
    },
    {
      concept: "Loteria",
      date: "1/9/2021",
      amount: 5000,
      type: "income",
    },
    {
      concept: "Lavadero",
      date: "10/9/2021",
      amount: -150,
      type: "expense",
    },
  ];
  res.json(info);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
