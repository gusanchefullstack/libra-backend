import express from "express";
import organizationController from "../controllers/organizationController.js";

const organizationRouter = express.Router();

organizationRouter.get("/", organizationController.getAllOrganizations);

export default organizationRouter;
