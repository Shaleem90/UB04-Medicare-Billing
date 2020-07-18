const db = require("../models");



exports.ub04services = function (req, res) {
  console.log("Hey it works!");
  console.log(req.body.FL48_Noncovered_Charges1);
  //calls long table to fill in more of the ub04space
  db.dbo_UB04LineItem.findOne({
    where: {
      // id: 1
      id: req.params.id
    }

  }).then(response => {
    // console.log(response);



    // Grabbing object from DB
    const FL42_Revenue_Code = JSON.parse(response.dataValues.FL42_Revenue_Code);
    const FL43_Description = JSON.parse(response.dataValues.FL43_Description);
    const FL44_HCPS_Rates = JSON.parse(response.dataValues.FL44_HCPS_Rates);
    const FL45_Service_Date = JSON.parse(response.dataValues.FL45_Service_Date);
    const FL46_Service_Units = JSON.parse(response.dataValues.FL46_Service_Units);
    const FL47_Total_Charges = JSON.parse(response.dataValues.FL47_Total_Charges);
    const FL48_Noncovered_Charges = JSON.parse(response.dataValues.FL48_Noncovered_Charges);
    const FL49 = JSON.parse(response.dataValues.FL49); 
   
   // Modified object from Database for Revenue Code.
    FL42_Revenue_Code.code1 = req.body.FL42_Revenue_Code1;
    FL42_Revenue_Code.code2 = req.body.FL42_Revenue_Code2;
    FL42_Revenue_Code.code3 = req.body.FL42_Revenue_Code3;
    
    response.update(
      {
        FL42_Revenue_Code: JSON.stringify(FL42_Revenue_Code)
      }
    ).then(res => {
      console.log(res);
    })
   
   
    // Modified object from Datbase for Description
    FL43_Description.serv1 = req.body.FL43_Description1;
    FL43_Description.serv2 = req.body.FL43_Description2;
    FL43_Description.serv3 = req.body.FL43_Description3;

    response.update({
      FL43_Description: JSON.stringify(FL43_Description)
    }).then(res => {
      console.log(res);
    })
    //  Modified object Database for Rates 
    FL44_HCPS_Rates.rate1 = req.body.FL44_HCPS_Rates1;
    FL44_HCPS_Rates.rate2 = req.body.FL44_HCPS_Rates2;
    FL44_HCPS_Rates.rate3 = req.body.FL44_HCPS_Rates3;

    response.update({
      FL44_HCPS_Rates: JSON.stringify(FL44_HCPS_Rates)
    }).then(res => {
      console.log(res);
    })
     //  Modified object Database for Service Date
    FL45_Service_Date.date1 = req.body.FL45_Service_Date1;
    FL45_Service_Date.date2 = req.body.FL45_Service_Date2;
    FL45_Service_Date.date3 = req.body.FL45_Service_Date3;

    response.update({
      FL45_Service_Date: JSON.stringify(FL45_Service_Date)
    }).then(res => {
      console.log(res);
    })

     //  Modified object Database for Units of service
    FL46_Service_Units.unit1 = req.body.FL46_Service_Units1;
    FL46_Service_Units.unit2 = req.body.FL46_Service_Units2;
    FL46_Service_Units.unit3 = req.body.FL46_Service_Units3;

    response.update({
      FL46_Service_Units: JSON.stringify(FL46_Service_Units)
    }).then(res => {
      console.log(res)
    })

    //  Modified object Total of All Charges
    FL47_Total_Charges.charge1 = req.body.FL47_Total_Charges1;
    FL47_Total_Charges.charge2 = req.body.FL47_Total_Charges2;
    FL47_Total_Charges.charge3 = req.body.FL47_Total_Charges3;

    response.update({
      FL47_Total_Charges: JSON.stringify(FL47_Total_Charges)
    }).then(res => {
      // console.log(res)
    })

     //  Modified object for Non-Covered Charges
    FL48_Noncovered_Charges.nonCov1 = req.body.FL48_Noncovered_Charges1;
    FL48_Noncovered_Charges.nonCov2 = req.body.FL48_Noncovered_Charges2;
    FL48_Noncovered_Charges.nonCov3 = req.body.FL48_Noncovered_Charges3;

    response.update({
      FL48_Noncovered_Charges: JSON.stringify(FL48_Noncovered_Charges)
    }).then(res => {
      console.log(res)
    })
    // Other Use Column
    FL49.nubc1 = req.body.FL49_1;
    FL49.nubc2 = req.body.FL49_2;
    FL49.nubc3 = req.body.FL49_3;

    response.update({
      FL49: JSON.stringify(FL49)
    }).then(res => {
      console.log(res)
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
