const express = require("express");
const router = express.Router();

const ptInfo_controller = require("../controllers/ptInfo_controller");


// localhost:8080/ub04form/ub04services/:id
router.put("/:id", ptInfo_controller.ub04ptInfo);


module.exports = router;