const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("/problems", controller.problems);
router.get("/workshops", controller.workshops);
router.get("/idepage", controller.idepage);

module.exports = router;