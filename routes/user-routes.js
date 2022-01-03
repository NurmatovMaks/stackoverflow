const router = require("express").Router();
const auth = require("./../middlewares/auth-middleware.js");
const checkRole = require("../middlewares/check-role");
const UserController = require("./../controllers/user-controller");

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/", auth, checkRole("ADMIN"), UserController.getAll);
router.post("/refresh", UserController.refresh);
router.get("/activate/:link", UserController.activate);

module.exports = router;
