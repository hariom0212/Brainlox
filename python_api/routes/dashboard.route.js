const express = require("express");
const router = express.Router();

const controller = require("../controllers/dashboardController");

router.get("/allSets", controller.allSets);
router.post("/addSet", controller.addSet);
router.get("/question", controller.questionGet);
router.post("/question", controller.questionPost);
router.post("/addQuestion", controller.addQuestion);
router.post("/addMultiQuestion", controller.addMultiQuestion);

module.exports = router;