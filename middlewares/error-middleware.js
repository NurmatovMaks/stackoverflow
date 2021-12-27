const ErrorHandler = require("./../utils/error-handler.js");

const errorMiddlware = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  console.log(err);
  res.status(500).json({ message: "Internal server error, try again leter" });
};

module.exports = errorMiddlware;
