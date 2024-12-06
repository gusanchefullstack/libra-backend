import express from "express";
import { body, param } from "express-validator";
import organizationController from "../controllers/organizationController.js";
import { handleInputErrors } from "../middleware/inputValidator.js";

const organizationRouter = express.Router();

organizationRouter.get(
  "/",
  handleInputErrors,
  organizationController.getAllOrganizations
);
organizationRouter.get(
  "/:id",
  param("id").isMongoId().withMessage("Invalid object id"),
  handleInputErrors,
  organizationController.getSingleOrganization
);
organizationRouter.post(
  "/",
  body("name")
    .exists()
    .withMessage("Missing name field")
    .trim()
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("country")
    .exists()
    .withMessage("Missing country field")
    .trim()
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid country lenght min:3 max:250"),
  handleInputErrors,
  organizationController.createOrganization
);
organizationRouter.delete(
  "/:id",
  param("id").isMongoId().withMessage("Invalid object id"),
  handleInputErrors,
  organizationController.deleteOrganization
);
organizationRouter.put(
  "/:id",
  param("id").isMongoId().withMessage("Invalid object id"),
  body("name")
    .optional()
    .trim()
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("country")
    .optional()
    .trim()
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid country lenght min:3 max:250"),
  handleInputErrors,
  organizationController.updateOrganization
);

export default organizationRouter;
