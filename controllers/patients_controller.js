const db = require("../models");

exports.index = (req, res) => {
    db.Patients.findAll({
        attributes: [name]
    }).then(result => {
        res.render(result);
    })
}