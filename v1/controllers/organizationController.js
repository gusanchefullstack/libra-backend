const getAllOrganizations = async (req, res, next) => {
  try {
    res.json({
      message: "Ok",
    });
  } catch (error) {
    next(error);
  }
};

export default { getAllOrganizations };
