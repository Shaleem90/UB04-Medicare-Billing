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

    res.render("ub04form", {
      layouts: "main",
      object: [FL42_Revenue_Code, FL43_Description, FL44_HCPS_Rates, FL45_Service_Date, FL46_Service_Units, FL47_Total_Charges, FL48_Noncovered_Charges,FL49, result]
    });

  }).catch(err => console.log(err))

};




  

 



















//In case for loop is needed, code below creates an
    // console.log(FL42_Revenue_Code);
    // const FL42_Revenue_CodeArr = Object.entries(FL42_Revenue_Code);

    // const test = [];
    // FL42_Revenue_CodeArr.forEach(([key, value]) => {
    //   console.log(key);
    //   console.log(value);
    //   const testObj = { [key]: value };
    //   test.push(testObj);
    // });

    // console.log({ test });
    ///Example to run query with loop

    // for (let i = 1; i <= test.length; i++) {
    //   console.log(i)
    //   let temp = `SELECT FL44_HCPS_Rates->"$.rate${i}" AS rate${i} FROM dbo_UBO4LineItems`;
    //   connection.query(temp, (err, res) => {
    //     if (err) throw err;
    //     console.log(res); 
    //   })
    // };


    // res.render("ub04form", {
    //   layouts: "main-ub04",
    //   object: result
    // });
// SELECT PatientId, Client_Name FROM result
// UNION
// Select rate1, rate2... from temp
// UNION colum , colum ... from temp1 