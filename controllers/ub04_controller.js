const db = require("../models");

//write joined table for association. Maybe having more than one method
exports.ub04 = function (req, res) {
    //calls long table to fill in more of the ub04space
    db.dbo_UB04.findOne({
        where: {
            UB04Id: req.params.UB04Id
        }
        
    }).then(result => {
        console.log(result)
        res.render("ub04form", {
            layouts:"main-ub04",
            object: result
        });
    })
    //call joined table to fill in services per client
    
}
