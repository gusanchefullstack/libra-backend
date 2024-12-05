import organizationService from "../services/organizationService.js";

const getAllOrganizations = async (req, res, next) => {
  try {
    const orgs = await organizationService.getAllOrganizations();
    res.json({
      message: "Ok",
      data: orgs,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleOrganization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const org = await organizationService.getSingleOrganization(id);
    res.json({
      message: "Ok",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

const createOrganization = async (req, res, next) => {
  try {
    const data = req.body;
    const org = await organizationService.createOrganization(data);
    res.json({
      message: "Ok",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOrganization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const org = await organizationService.deleteOrganization(id);
    res.json({
      message: "Ok",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrganization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const org = await organizationService.updateOrganization(id, data);
    res.json({
      message: "Ok",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllOrganizations,
  getSingleOrganization,
  createOrganization,
  deleteOrganization,
  updateOrganization,
};
