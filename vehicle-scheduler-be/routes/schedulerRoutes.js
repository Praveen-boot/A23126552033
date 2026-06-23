const express = require("express");

const router = express.Router();

const {
    getOptimalSchedule
} = require("../controllers/schedulerController");

router.get("/:depotId", getOptimalSchedule);

module.exports = router;