const db = require("../models");

exports.index = function (req, res) {
    db.Patients.findAll({
    }).then(result => {
        res.render(result);
    })
}