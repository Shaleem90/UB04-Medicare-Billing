const db = require("../models");

exports.index = function (req, res) {
    db.dbo_UB04.findAll({
        attributes:["id","FL8_b"]
    }).then(name => {
        // console.log(name)
        res.render("index", {
            layouts:"main-patients",
            name
        });
    }).catch(err => console.log(err))
    
}
