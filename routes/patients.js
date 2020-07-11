const express = require("express");
const router = express.router();

const patients_controller = require("../controllers/patients_controller");

router.get("/", patients_controller.index);

module.exports = router;