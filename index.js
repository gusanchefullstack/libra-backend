import express from "express";
import "dotenv/config";
import { apiV1Router } from "./v1/routes/routes.js";
const app = express();

app.use(express.json());

app.use("/api/v1", apiV1Router);

app.listen(process.env.APPLICATION_PORT, () => {
  console.log(
    `Libra application started at port ${process.env.APPLICATION_PORT}`
  );
});
