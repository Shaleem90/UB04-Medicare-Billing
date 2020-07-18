const db = require("../models");


exports.ub04services = function (req, res) {
  console.log("Hey it works!");
  console.log(req.body.FL42_Revenue_Code1);
  //calls long table to fill in more of the ub04space
  db.dbo_UB04LineItem.findOne({
    where: {
      id: 1
      // id: req.params.id
    }

  }).then(response => {
    // console.log(response);



    // Grabbing object from DB
    const FL42_Revenue_Code = JSON.parse(response.dataValues.FL42_Revenue_Code);
    // const FL43_Description = JSON.parse(response.dataValues.FL43_Description);
    // const FL44_HCPS_Rates = JSON.parse(response.dataValues.FL44_HCPS_Rates);
    // const FL45_Service_Date = JSON.parse(response.dataValues.FL45_Service_Date);
    // const FL46_Service_Units = JSON.parse(response.dataValues.FL46_Service_Units);
    // const FL47_Total_Charges = JSON.parse(response.dataValues.FL47_Total_Charges);
    // const FL48_Noncovered_Charges = JSON.parse(response.dataValues.FL48_Noncovered_Charges);
    // const FL49 = JSON.parse(result.dataValues.FL49); 
    console.log(FL42_Revenue_Code);
    // Modified object from Database.
    FL42_Revenue_Code.code1 = req.body.FL42_Revenue_Code1;
    FL42_Revenue_Code.code2 = req.body.FL42_Revenue_Code2;
    FL42_Revenue_Code.code3 = req.body.FL42_Revenue_Code3;

    console.log(FL42_Revenue_Code);
    response.update(
      {
        FL42_Revenue_Code: JSON.stringify(FL42_Revenue_Code)
      }
    ).then(res => {
      console.log(res);
    })
















    // const FL42_Revenue_CodeArr = Object.entries(FL42_Revenue_Code)
    // const FL42Array = [];
    // FL42_Revenue_CodeArr.forEach(([key, value]) => {

    //   const testObj = { [key]: value };
    //   FL42Array.push(testObj);
    // });
   res.render("ub04form", {
      layouts: "main",
      response

    })




  }).catch(err => console.log(err));

}