import express from "express";
import organizationController from "../controllers/organizationController.js";

const organizationRouter = express.Router();

organizationRouter.get("/", organizationController.getAllOrganizations);
organizationRouter.get("/:id", organizationController.getSingleOrganization);
organizationRouter.post("/", organizationController.createOrganization);
organizationRouter.delete("/:id", organizationController.deleteOrganization);
organizationRouter.put("/:id", organizationController.updateOrganization);

export default organizationRouter;
