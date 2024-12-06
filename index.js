import express from "express";
import "dotenv/config";
import cors from "cors";
import { apiV1Router } from "./v1/routes/routes.js";
import { Prisma } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", apiV1Router);

app.use((err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    err.status = 404;
  }
  if (
    err instanceof Prisma.PrismaClientInitializationError ||
    err instanceof Prisma.PrismaClientRustPanicError ||
    Prisma.PrismaClientUnknownRequestError ||
    err instanceof Prisma.PrismaClientValidationError
  ) {
    err.status = 500;
  }
  console.log("******************************************************");
  console.log("************* API Default Error Handler **************");
  console.log("******************************************************");
  console.error(err.message);
  console.error(err.stack);
  res.status(err.status).json({
    status: "Error",
    message: err.message,
    stack: err.stack,
  });
});

app.listen(process.env.APPLICATION_PORT, () => {
  console.log(
    `Libra application started at port ${process.env.APPLICATION_PORT}`
  );
});
