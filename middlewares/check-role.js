const ErrorHandler = require("./../utils/error-handler.js");

const checkRole =
  (...roles) =>
  (req, res, next) => {
    if (req.method === "OPTIONS") {
      next();
    }
    const { user } = req;
    try {
      if (!roles.includes(user.role)) {
        throw ErrorHandler.ForbiddenError("Permision denied");
      }
      next();
    } catch (error) {
      next(ErrorHandler.ForbiddenError("Permision denied"));
    }
  };

module.exports = checkRole;
