const db = require("../models");
  
exports.ub04 = function (req, res) {
  //calls long table to fill in more of the ub04space
  db.dbo_UB04LineItem.findOne({
    where: {
      // id: 1
      id: req.params.id
    },
    include: [
      {
        model: db.dbo_UB04
      }
    ]
  }).then(result => {
    
    console.log(result)
   
    const FL42_Revenue_Code = JSON.parse(result.dataValues.FL42_Revenue_Code);
    const FL43_Description = JSON.parse(result.dataValues.FL43_Description);
    const FL44_HCPS_Rates = JSON.parse(result.dataValues.FL44_HCPS_Rates);
    const FL45_Service_Date = JSON.parse(result.dataValues.FL45_Service_Date);
    const FL46_Service_Units = JSON.parse(result.dataValues.FL46_Service_Units);
    const FL47_Total_Charges = JSON.parse(result.dataValues.FL47_Total_Charges);
    const FL48_Noncovered_Charges = JSON.parse(result.dataValues.FL48_Noncovered_Charges);
    const FL49 = JSON.parse(result.dataValues.FL49);

//At this point we have all services for a specific person as an object plus the patient info table. All together in one table. All services in one row object
//Conditional para establecer numeros de p'aginas
//For loop. Divide number of services / 22 = #of pages
//Do res.render inside the for loop. 
//Each loop at the end, saves info an start a new handlebar
////Problem with {{reference}}

    const renderObj = [FL42_Revenue_Code, FL43_Description, FL44_HCPS_Rates, FL45_Service_Date, FL46_Service_Units, FL47_Total_Charges, FL48_Noncovered_Charges,FL49, result]

    const renderObj2 = [FL42_Revenue_CodePage2];
    //const arr1 = [];
    //const revCodePage1 = {}
    //const revCodePage2 = {"code1: 0112"}
    //FL42_Revenue_CodePage2: {"code1": "0018", "code2": "0121", "code3": "0112"}
    // const FL42_RevCode = object.entries(FL42_Revenue_Code)
    // const FL43_Desc = object.entries(FL42_Description)
    // [["code1", "0018"],["code2", "0023"], ["code3", "0112"]]
    //let page = 1;
    //For loop length 2 on every second index{
        //if (page = 1) {
            //revCodePage1.code+(i+1) = FL42_RevCode[i][1];
            //ServPage1.serv+(i+1) = FL4_Desc[i][1];
            
            //}
        //on every 2nd object index
    //}
    //revCodePage2.code+(i+1) = FL42_RevCode[i+2][1];


     [FL42_Revenue_Code, FL43_Description, FL44_HCPS_Rates, FL45_Service_Date, FL46_Service_Units, FL47_Total_Charges, FL48_Noncovered_Charges,FL49, result]

    res.render("ub04form", {
      layouts: "main",
      object: renderObj, renderObj2
    });

  }).catch(err => console.log(err))

};

//Parse the string to get full object (max possible length 99)
//Slice object every 22 elements
//paste sliced elements on new array