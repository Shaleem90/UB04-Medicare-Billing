const express = require("express");
const router = express.Router();

const patients_controller = require("../controllers/patients_controller");

router.get("/", patients_controller.index);

module.exports = router;