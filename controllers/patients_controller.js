const db = require("../models");

exports.index = (req, res) => {
    db.dbo_UB04.findAll({
       attributes: ["FL8_b"]
    }).then(result => {
        console.log(result)
        res.render("index", {
            layouts: "main",
            name: result
        });
        
    })
    
};
