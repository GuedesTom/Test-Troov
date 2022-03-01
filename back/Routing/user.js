const express = require("express");
const controller = require("../controllers/user");
const router = express.Router();

router.post("/signup", controller.signUp);
router.post("/login", controller.login);
router.get("/object", controller.isLoggedIn, controller.object);

module.exports = router;
