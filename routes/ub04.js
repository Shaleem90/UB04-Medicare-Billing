const express = require("express");
const router = express.Router();

const ub04_controller = require("../controllers/ub04_controller");


// localhost:8080/ub04form/:id
router.get("/:id", ub04_controller.ub04);


module.exports = router;
