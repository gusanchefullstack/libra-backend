import express from "express";
import organizationRouter from "./organizationsRouter.js";

const apiV1Router = express.Router();

apiV1Router.use("/organizations", organizationRouter);

export { apiV1Router };
