const getAllProblems = require("./get-all-problems");
const getProblem = require("./get-problem");

module.exports = {
  "/api/problem/{id}": {
    ...getProblem,
  },
  "/api/problem/": {
    ...getAllProblems,
  },
};
