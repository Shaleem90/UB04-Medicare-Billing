const express = require("express");
const router = express.Router();

const services_controller = require("../controllers/services_controller");


// localhost:8080/ub04form/ub04services/:id
router.put("/:id", services_controller.ub04services);


module.exports = router;