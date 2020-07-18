const db = require("../models");


exports.ub04ptInfo = function (req, res) {
  


  db.dbo_UB04.findOne({
    where: {
      id: req.params.id
    },
  }).then(result => {
    result.update(
      {
       
        FL1: req.body.FL1
        // FL1_a: req.body.FL1_a,
        // FL1_b: req.body.FL1_b,
        // FL1_c: req.body.FL1_c,
        // FL1_d: req.body.FL1_d,


        // FL2: req.body.FL2,
        // FL2_a: req.body.FL2_a,
        // FL2_b: req.body.FL2_b,
        // FL2_c: req.body.FL2_c,
        // FL2_d: req.body.FL2_d

      }
    ).then(res => {
      console.log(res);
    })
    res.render("ub04form", {
      layouts: "main",
      result
    })
  }).catch(err => console.log(err));
 }
