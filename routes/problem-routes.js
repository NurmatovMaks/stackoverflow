const router = require("express").Router();

const auth = require("./../middlewares/auth-middleware");

const ProblemContoller = require("./../controllers/problem-controller");

router.post("/create", auth, ProblemContoller.create);
router.get("/", ProblemContoller.getAll);

module.exports = router;
