import express from "express";
import "dotenv/config"
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello Libra",
  });
});


app.listen(process.env.APPLICATION_PORT, () => {
  console.log(
    `Libra application started at port ${process.env.APPLICATION_PORT}`
  );
});
