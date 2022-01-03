const router = require("express").Router();

const auth = require("./../middlewares/auth-middleware");

const ProblemContoller = require("./../controllers/problem-controller");
const checkRole = require("../middlewares/check-role");
const checkPermision = require("../middlewares/check-permision");
const { Problem } = require("../models");

router.post("/create", auth, ProblemContoller.create);
router.delete(
  "/:id",
  auth,
  checkRole("ADMIN", "USER"),
  checkPermision(Problem),
  ProblemContoller.deleteOne
);
router.get("/", ProblemContoller.getAll);

module.exports = router;
