import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllOrganizations = async () => {
  try {
    const orgs = await prisma.organization.findMany();
    return orgs;
  } catch (error) {
    throw error;
  }
};

const getSingleOrganization = async (id) => {
  try {
    const org = await prisma.organization.findUnique({
      where: {
        id,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

const createOrganization = async (fields) => {
  try {
    const org = await prisma.organization.create({
      data: {
        ...fields,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

const deleteOrganization = async (id) => {
  try {
    const org = await prisma.organization.delete({
      where: {
        id,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

const updateOrganization = async (id, fields) => {
  try {
    const org = await prisma.organization.update({
      where: {
        id,
      },
      data: {
        ...fields,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllOrganizations,
  getSingleOrganization,
  createOrganization,
  deleteOrganization,
  updateOrganization,
};
