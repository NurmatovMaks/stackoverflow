const { NOT_FOUND } = require("../utils/consts");
const ErrorHandler = require("../utils/error-handler");

const checkPermision = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req;
    const data = await Model.findOne({ where: { id } });
    if (!data) return next(ErrorHandler.BadRequest(NOT_FOUND));
    if (user.id === data.userID || user.role === "ADMIN") {
      return next();
    }
    return next(ErrorHandler.ForbiddenError("Permision  here denied"));
  } catch (error) {
    next(ErrorHandler.ForbiddenError("Permision denied"));
  }
};

module.exports = checkPermision;
