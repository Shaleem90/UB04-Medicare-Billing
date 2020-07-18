const db = require("../models");

exports.ub04 = function (req, res) {
  const id = req.params.id;
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

    // console.log(result)
    const allPages = [];

    const FL42_Revenue_Code = JSON.parse(result.dataValues.FL42_Revenue_Code);
    const FL43_Description = JSON.parse(result.dataValues.FL43_Description);
    const FL44_HCPS_Rates = JSON.parse(result.dataValues.FL44_HCPS_Rates);
    const FL45_Service_Date = JSON.parse(result.dataValues.FL45_Service_Date);
    const FL46_Service_Units = JSON.parse(result.dataValues.FL46_Service_Units);
    const FL47_Total_Charges = JSON.parse(result.dataValues.FL47_Total_Charges);
    const FL48_Noncovered_Charges = JSON.parse(result.dataValues.FL48_Noncovered_Charges);
    const FL49 = JSON.parse(result.dataValues.FL49);

    ////Prepare objects. They'll be filled in for loop.Page1
    const revCodePage1 = {};
    const descriptionPage1 = {};
    const hcpsRatesPage1 = {};
    const serviceDatePage1 = {};
    const serviceUnitPage1 = {};
    const totalChargesPage1 = {};
    const nonCoveredChrgsPage1 = {};
    const box49Page1 = {};
    const page1 = { page: 1 }
    ////Prepare objects. They'll be filled in for loop.Page2
    const revCodePage2 = {};
    const descriptionPage2 = {};
    const hcpsRatesPage2 = {};
    const serviceDatePage2 = {};
    const serviceUnitPage2 = {};
    const totalChargesPage2 = {};
    const nonCoveredChrgsPage2 = {};
    const box49Page2 = {};
    const page2 = { page: 2 }
    ////Prepare objects. They'll be filled in for loop.Page3
    const revCodePage3 = {};
    const descriptionPage3 = {};
    const hcpsRatesPage3 = {};
    const serviceDatePage3 = {};
    const serviceUnitPage3 = {};
    const totalChargesPage3 = {};
    const nonCoveredChrgsPage3 = {};
    const box49Page3 = {};
    const page3 = { page: 3 }
    ////Prepare objects. They'll be filled in for loop.Page4
    const revCodePage4 = {};
    const descriptionPage4 = {};
    const hcpsRatesPage4 = {};
    const serviceDatePage4 = {};
    const serviceUnitPage4 = {};
    const totalChargesPage4 = {};
    const nonCoveredChrgsPage4 = {};
    const box49Page4 = {};
    const page4 = { page: 4 }
    ////Prepare objects. They'll be filled in for loop.Page5
    const revCodePage5 = {};
    const descriptionPage5 = {};
    const hcpsRatesPage5 = {};
    const serviceDatePage5 = {};
    const serviceUnitPage5 = {};
    const totalChargesPage5 = {};
    const nonCoveredChrgsPage5 = {};
    const box49Page5 = {};
    const page5 = { page: 5 }
    ////Prepare objects. They'll be filled in for loop.Page6
    const revCodePage6 = {};
    const descriptionPage6 = {};
    const hcpsRatesPage6 = {};
    const serviceDatePage6 = {};
    const serviceUnitPage6 = {};
    const totalChargesPage6 = {};
    const nonCoveredChrgsPage6 = {};
    const box49Page6 = {};
    const page6 = { page: 6 }
    ////Prepare objects. They'll be filled in for loop.Page7
    const revCodePage7 = {};
    const descriptionPage7 = {};
    const hcpsRatesPage7 = {};
    const serviceDatePage7 = {};
    const serviceUnitPage7 = {};
    const totalChargesPage7 = {};
    const nonCoveredChrgsPage7 = {};
    const box49Page7 = {};
    const page7 = { page: 7 }
    ////Prepare objects. They'll be filled in for loop.Page8
    const revCodePage8 = {};
    const descriptionPage8 = {};
    const hcpsRatesPage8 = {};
    const serviceDatePage8 = {};
    const serviceUnitPage8 = {};
    const totalChargesPage8 = {};
    const nonCoveredChrgsPage8 = {};
    const box49Page8 = {};
    const page8 = { page: 8 }
    ////Prepare objects. They'll be filled in for loop.Page9
    const revCodePage9 = {};
    const descriptionPage9 = {};
    const hcpsRatesPage9 = {};
    const serviceDatePage9 = {};
    const serviceUnitPage9 = {};
    const totalChargesPage9 = {};
    const nonCoveredChrgsPage9 = {};
    const box49Page9 = {};
    const page9 = { page: 9 }
    ////Prepare objects. They'll be filled in for loop.Page10
    const revCodePage10 = {};
    const descriptionPage10 = {};
    const hcpsRatesPage10 = {};
    const serviceDatePage10 = {};
    const serviceUnitPage10 = {};
    const totalChargesPage10 = {};
    const nonCoveredChrgsPage10 = {};
    const box49Page10 = {};
    const page10 = { page: 10 }
    ////Prepare objects. They'll be filled in for loop.Page11
    const revCodePage11 = {};
    const descriptionPage11 = {};
    const hcpsRatesPage11 = {};
    const serviceDatePage11 = {};
    const serviceUnitPage11 = {};
    const totalChargesPage11 = {};
    const nonCoveredChrgsPage11 = {};
    const box49Page11 = {};
    const page11 = { page: 11 }
    ////Prepare objects. They'll be filled in for loop.Page12
    const revCodePage12 = {};
    const descriptionPage12 = {};
    const hcpsRatesPage12 = {};
    const serviceDatePage12 = {};
    const serviceUnitPage12 = {};
    const totalChargesPage12 = {};
    const nonCoveredChrgsPage12 = {};
    const box49Page12 = {};
    const page12 = { page: 12 }
    ////Prepare objects. They'll be filled in for loop.Page13
    const revCodePage13 = {};
    const descriptionPage13 = {};
    const hcpsRatesPage13 = {};
    const serviceDatePage13 = {};
    const serviceUnitPage13 = {};
    const totalChargesPage13 = {};
    const nonCoveredChrgsPage13 = {};
    const box49Page13 = {};
    const page13 = { page: 13 }
    ////Prepare objects. They'll be filled in for loop.Page14
    const revCodePage14 = {};
    const descriptionPage14 = {};
    const hcpsRatesPage14 = {};
    const serviceDatePage14 = {};
    const serviceUnitPage14 = {};
    const totalChargesPage14 = {};
    const nonCoveredChrgsPage14 = {};
    const box49Page14 = {};
    const page14 = { page: 14 }
    ////Prepare objects. They'll be filled in for loop.Page15
    const revCodePage15 = {};
    const descriptionPage15 = {};
    const hcpsRatesPage15 = {};
    const serviceDatePage15 = {};
    const serviceUnitPage15 = {};
    const totalChargesPage15 = {};
    const nonCoveredChrgsPage15 = {};
    const box49Page15 = {};
    const page15 = { page: 15 }
    ////Prepare objects. They'll be filled in for loop.Page16
    const revCodePage16 = {};
    const descriptionPage16 = {};
    const hcpsRatesPage16 = {};
    const serviceDatePage16 = {};
    const serviceUnitPage16 = {};
    const totalChargesPage16 = {};
    const nonCoveredChrgsPage16 = {};
    const box49Page16 = {};
    const page16 = { page: 16 }
    ////Prepare objects. They'll be filled in for loop.Page17
    const revCodePage17 = {};
    const descriptionPage17 = {};
    const hcpsRatesPage17 = {};
    const serviceDatePage17 = {};
    const serviceUnitPage17 = {};
    const totalChargesPage17 = {};
    const nonCoveredChrgsPage17 = {};
    const box49Page17 = {};
    const page17 = { page: 17 }
    ////Prepare objects. They'll be filled in for loop.Page18
    const revCodePage18 = {};
    const descriptionPage18 = {};
    const hcpsRatesPage18 = {};
    const serviceDatePage18 = {};
    const serviceUnitPage18 = {};
    const totalChargesPage18 = {};
    const nonCoveredChrgsPage18 = {};
    const box49Page18 = {};
    const page18 = { page: 18 }
    ////Prepare objects. They'll be filled in for loop.Page19
    const revCodePage19 = {};
    const descriptionPage19 = {};
    const hcpsRatesPage19 = {};
    const serviceDatePage19 = {};
    const serviceUnitPage19 = {};
    const totalChargesPage19 = {};
    const nonCoveredChrgsPage19 = {};
    const box49Page19 = {};
    const page19 = { page: 19 }
    ////Prepare objects. They'll be filled in for loop.Page20
    const revCodePage20 = {};
    const descriptionPage20 = {};
    const hcpsRatesPage20 = {};
    const serviceDatePage20 = {};
    const serviceUnitPage20 = {};
    const totalChargesPage20 = {};
    const nonCoveredChrgsPage20 = {};
    const box49Page20 = {};
    const page20 = { page: 20 }
    ////Prepare objects. They'll be filled in for loop.Page21
    const revCodePage21 = {};
    const descriptionPage21 = {};
    const hcpsRatesPage21 = {};
    const serviceDatePage21 = {};
    const serviceUnitPage21 = {};
    const totalChargesPage21 = {};
    const nonCoveredChrgsPage21 = {};
    const box49Page21 = {};
    const page21 = { page: 21 }
    ////Prepare objects. They'll be filled in for loop.Page22
    const revCodePage22 = {};
    const descriptionPage22 = {};
    const hcpsRatesPage22 = {};
    const serviceDatePage22 = {};
    const serviceUnitPage22 = {};
    const totalChargesPage22 = {};
    const nonCoveredChrgsPage22 = {};
    const box49Page22 = {};
    const page22 = { page: 22 }
    ////Prepare objects. They'll be filled in for loop.Page23
    const revCodePage23 = {};
    const descriptionPage23 = {};
    const hcpsRatesPage23 = {};
    const serviceDatePage23 = {};
    const serviceUnitPage23 = {};
    const totalChargesPage23 = {};
    const nonCoveredChrgsPage23 = {};
    const box49Page23 = {};
    const page23 = { page: 23 }
    ////Prepare objects. They'll be filled in for loop.Page24
    const revCodePage24 = {};
    const descriptionPage24 = {};
    const hcpsRatesPage24 = {};
    const serviceDatePage24 = {};
    const serviceUnitPage24 = {};
    const totalChargesPage24 = {};
    const nonCoveredChrgsPage24 = {};
    const box49Page24 = {};
    const page24 = { page: 24 }
    ////Prepare objects. They'll be filled in for loop.Page25
    const revCodePage25 = {};
    const descriptionPage25 = {};
    const hcpsRatesPage25 = {};
    const serviceDatePage25 = {};
    const serviceUnitPage25 = {};
    const totalChargesPage25 = {};
    const nonCoveredChrgsPage25 = {};
    const box49Page25 = {};
    const page25 = { page: 25 }
    ////Prepare objects. They'll be filled in for loop.Page26
    const revCodePage26 = {};
    const descriptionPage26 = {};
    const hcpsRatesPage26 = {};
    const serviceDatePage26 = {};
    const serviceUnitPage26 = {};
    const totalChargesPage26 = {};
    const nonCoveredChrgsPage26 = {};
    const box49Page26 = {};
    const page26 = { page: 26 }
    ////Prepare objects. They'll be filled in for loop.Page27
    const revCodePage27 = {};
    const descriptionPage27 = {};
    const hcpsRatesPage27 = {};
    const serviceDatePage27 = {};
    const serviceUnitPage27 = {};
    const totalChargesPage27 = {};
    const nonCoveredChrgsPage27 = {};
    const box49Page27 = {};
    const page27 = { page: 27 }
    ////Prepare objects. They'll be filled in for loop.Page28
    const revCodePage28 = {};
    const descriptionPage28 = {};
    const hcpsRatesPage28 = {};
    const serviceDatePage28 = {};
    const serviceUnitPage28 = {};
    const totalChargesPage28 = {};
    const nonCoveredChrgsPage28 = {};
    const box49Page28 = {};
    const page28 = { page: 28 }
    ////Prepare objects. They'll be filled in for loop.Page29
    const revCodePage29 = {};
    const descriptionPage29 = {};
    const hcpsRatesPage29 = {};
    const serviceDatePage29 = {};
    const serviceUnitPage29 = {};
    const totalChargesPage29 = {};
    const nonCoveredChrgsPage29 = {};
    const box49Page29 = {};
    const page29 = { page: 29 }
    ////Prepare objects. They'll be filled in for loop.Page30
    const revCodePage30 = {};
    const descriptionPage30 = {};
    const hcpsRatesPage30 = {};
    const serviceDatePage30 = {};
    const serviceUnitPage30 = {};
    const totalChargesPage30 = {};
    const nonCoveredChrgsPage30 = {};
    const box49Page30 = {};
    const page30 = { page: 30 }
    ////Prepare objects. They'll be filled in for loop.Page31
    const revCodePage31 = {};
    const descriptionPage31 = {};
    const hcpsRatesPage31 = {};
    const serviceDatePage31 = {};
    const serviceUnitPage31 = {};
    const totalChargesPage31 = {};
    const nonCoveredChrgsPage31 = {};
    const box49Page31 = {};
    const page31 = { page: 31 }
    ////Prepare objects. They'll be filled in for loop.Page32
    const revCodePage32 = {};
    const descriptionPage32 = {};
    const hcpsRatesPage32 = {};
    const serviceDatePage32 = {};
    const serviceUnitPage32 = {};
    const totalChargesPage32 = {};
    const nonCoveredChrgsPage32 = {};
    const box49Page32 = {};
    const page32 = { page: 32 }
    ////Prepare objects. They'll be filled in for loop.Page33
    const revCodePage33 = {};
    const descriptionPage33 = {};
    const hcpsRatesPage33 = {};
    const serviceDatePage33 = {};
    const serviceUnitPage33 = {};
    const totalChargesPage33 = {};
    const nonCoveredChrgsPage33 = {};
    const box49Page33 = {};
    const page33 = { page: 33 }
    ////Prepare objects. They'll be filled in for loop.Page34
    const revCodePage34 = {};
    const descriptionPage34 = {};
    const hcpsRatesPage34 = {};
    const serviceDatePage34 = {};
    const serviceUnitPage34 = {};
    const totalChargesPage34 = {};
    const nonCoveredChrgsPage34 = {};
    const box49Page34 = {};
    const page34 = { page: 34 }
    ////Prepare objects. They'll be filled in for loop.Page35
    const revCodePage35 = {};
    const descriptionPage35 = {};
    const hcpsRatesPage35 = {};
    const serviceDatePage35 = {};
    const serviceUnitPage35 = {};
    const totalChargesPage35 = {};
    const nonCoveredChrgsPage35 = {};
    const box49Page35 = {};
    const page35 = { page: 35 }
    ////Prepare objects. They'll be filled in for loop.Page36
    const revCodePage36 = {};
    const descriptionPage36 = {};
    const hcpsRatesPage36 = {};
    const serviceDatePage36 = {};
    const serviceUnitPage36 = {};
    const totalChargesPage36 = {};
    const nonCoveredChrgsPage36 = {};
    const box49Page36 = {};
    const page36 = { page: 36 }
    ////Prepare objects. They'll be filled in for loop.Page37
    const revCodePage37 = {};
    const descriptionPage37 = {};
    const hcpsRatesPage37 = {};
    const serviceDatePage37 = {};
    const serviceUnitPage37 = {};
    const totalChargesPage37 = {};
    const nonCoveredChrgsPage37 = {};
    const box49Page37 = {};
    const page37 = { page: 37 }
    ////Prepare objects. They'll be filled in for loop.Page38
    const revCodePage38 = {};
    const descriptionPage38 = {};
    const hcpsRatesPage38 = {};
    const serviceDatePage38 = {};
    const serviceUnitPage38 = {};
    const totalChargesPage38 = {};
    const nonCoveredChrgsPage38 = {};
    const box49Page38 = {};
    const page38 = { page: 38 }
    ////Prepare objects. They'll be filled in for loop.Page39
    const revCodePage39 = {};
    const descriptionPage39 = {};
    const hcpsRatesPage39 = {};
    const serviceDatePage39 = {};
    const serviceUnitPage39 = {};
    const totalChargesPage39 = {};
    const nonCoveredChrgsPage39 = {};
    const box49Page39 = {};
    const page39 = { page: 39 }
    ////Prepare objects. They'll be filled in for loop.Page40
    const revCodePage40 = {};
    const descriptionPage40 = {};
    const hcpsRatesPage40 = {};
    const serviceDatePage40 = {};
    const serviceUnitPage40 = {};
    const totalChargesPage40 = {};
    const nonCoveredChrgsPage40 = {};
    const box49Page40 = {};
    const page40 = { page: 40 }
    ////Prepare objects. They'll be filled in for loop.Page41
    const revCodePage41 = {};
    const descriptionPage41 = {};
    const hcpsRatesPage41 = {};
    const serviceDatePage41 = {};
    const serviceUnitPage41 = {};
    const totalChargesPage41 = {};
    const nonCoveredChrgsPage41 = {};
    const box49Page41 = {};
    const page41 = { page: 41 }
    ////Prepare objects. They'll be filled in for loop.Page42
    const revCodePage42 = {};
    const descriptionPage42 = {};
    const hcpsRatesPage42 = {};
    const serviceDatePage42 = {};
    const serviceUnitPage42 = {};
    const totalChargesPage42 = {};
    const nonCoveredChrgsPage42 = {};
    const box49Page42 = {};
    const page42 = { page: 42 }
    ////Prepare objects. They'll be filled in for loop.Page43
    const revCodePage43 = {};
    const descriptionPage43 = {};
    const hcpsRatesPage43 = {};
    const serviceDatePage43 = {};
    const serviceUnitPage43 = {};
    const totalChargesPage43 = {};
    const nonCoveredChrgsPage43 = {};
    const box49Page43 = {};
    const page43 = { page: 43 }
    ////Prepare objects. They'll be filled in for loop.Page44
    const revCodePage44 = {};
    const descriptionPage44 = {};
    const hcpsRatesPage44 = {};
    const serviceDatePage44 = {};
    const serviceUnitPage44 = {};
    const totalChargesPage44 = {};
    const nonCoveredChrgsPage44 = {};
    const box49Page44 = {};
    const page44 = { page: 44 }
    ////Prepare objects.They'll be filled in for loop.Page45
    const revCodePage45 = {};
    const descriptionPage45 = {};
    const hcpsRatesPage45 = {};
    const serviceDatePage45 = {};
    const serviceUnitPage45 = {};
    const totalChargesPage45 = {};
    const nonCoveredChrgsPage45 = {};
    const box49Page45 = {};
    const page45 = { page: 45 }
    ////Prepare objects. They'll be filled in for loop.Page46
    const revCodePage46 = {};
    const descriptionPage46 = {};
    const hcpsRatesPage46 = {};
    const serviceDatePage46 = {};
    const serviceUnitPage46 = {};
    const totalChargesPage46 = {};
    const nonCoveredChrgsPage46 = {};
    const box49Page46 = {};
    const page46 = { page: 46 }

    //transform objects into arrays of objects
    // `{[code1: 12],[code2: 13], [code3: 5], ... ,[code22: 20],[code23: 23]}`
    const FL42_RevCode = Object.entries(FL42_Revenue_Code);
    const FL43_Descrp = Object.entries(FL43_Description);
    const FL44_Rates = Object.entries(FL44_HCPS_Rates);
    const FL45_ServDate = Object.entries(FL45_Service_Date);
    const FL46_ServUnits = Object.entries(FL46_Service_Units);
    const FL47_TotalChrgs = Object.entries(FL47_Total_Charges);
    const FL48_NonCovered = Object.entries(FL48_Noncovered_Charges);
    const FL49_nubc = Object.entries(FL49);
    //Create a conditionals to avoid looping through all 46 pages if there's no need.
    //Loop through the arrays of objects to get 22 per page and give them all the same key names.
    //Loop for Page1
    for (let i = 0; i < FL42_RevCode.length; i++) {
      if (i < 22) {
        revCodePage1[`code${i + 1}`] = FL42_RevCode[i][1];
        //{code1: "0012", code2: "0014", ... code22: "0012"}
        descriptionPage1[`serv${i + 1}`] = FL43_Descrp[i][1];
        hcpsRatesPage1[`rate${i + 1}`] = FL44_Rates[i][1];
        serviceDatePage1[`date${i + 1}`] = FL45_ServDate[i][1];
        serviceUnitPage1[`unit${i + 1}`] = FL46_ServUnits[i][1];
        totalChargesPage1[`charge${i + 1}`] = FL47_TotalChrgs[i][1];
        nonCoveredChrgsPage1[`nonCov${i + 1}`] = FL48_NonCovered[i][1];
        box49Page1[`nubc${i + 1}`] = FL49_nubc[i][1];
      } else {
        break;
      }
    }; 
    if (FL42_Revenue_Code.code23) {
      //Loop for Page2
      for (let i = 0; i < FL42_RevCode.length-22; i++) {
          revCodePage2[`code${i + 1}`] = FL42_RevCode[i + 22][1];
          console.log(revCodePage2)
          descriptionPage2[`serv${i + 1}`] = FL43_Descrp[i + 22][1];
          hcpsRatesPage2[`rate${i + 1}`] = FL44_Rates[i + 22][1];
          serviceDatePage2[`date${i + 1}`] = FL45_ServDate[i + 22][1];
          serviceUnitPage2[`unit${i + 1}`] = FL46_ServUnits[i + 22][1];
          totalChargesPage2[`charge${i + 1}`] = FL47_TotalChrgs[i + 22][1];
          nonCoveredChrgsPage2[`nonCov${i + 1}`] = FL48_NonCovered[i + 22][1];
          box49Page2[`nubc${i + 1}`] = FL49_nubc[i + 22][1];
      };

    };
    if (FL42_Revenue_Code.code45) {
      //Loop for Page3
      for (let i = 0; i < FL42_RevCode.length-44; i++) {
          revCodePage3[`code${i + 1}`] = FL42_RevCode[i + 44][1];
          descriptionPage3[`serv${i + 1}`] = FL43_Descrp[i + 44][1];
          hcpsRatesPage3[`rate${i + 1}`] = FL44_Rates[i + 44][1];
          serviceDatePage3[`date${i + 1}`] = FL45_ServDate[i + 44][1];
          serviceUnitPage3[`unit${i + 1}`] = FL46_ServUnits[i + 44][1];
          totalChargesPage3[`charge${i + 1}`] = FL47_TotalChrgs[i + 44][1];
          nonCoveredChrgsPage3[`nonCov${i + 1}`] = FL48_NonCovered[i + 44][1];
          box49Page3[`nubc${i + 1}`] = FL49_nubc[i + 44][1];
      };
    };
    if (FL42_Revenue_Code.code67) {
      //Loop for Page4
      for (let i = 0; i < FL42_RevCode.length-66; i++) {
          revCodePage4[`code${i + 1}`] = FL42_RevCode[i + 66][1];
          descriptionPage4[`serv${i + 1}`] = FL43_Descrp[i + 66][1];
          hcpsRatesPage4[`rate${i + 1}`] = FL44_Rates[i + 66][1];
          serviceDatePage4[`date${i + 1}`] = FL45_ServDate[i + 66][1];
          serviceUnitPage4[`unit${i + 1}`] = FL46_ServUnits[i + 66][1];
          totalChargesPage4[`charge${i + 1}`] = FL47_TotalChrgs[i + 66][1];
          nonCoveredChrgsPage4[`nonCov${i + 1}`] = FL48_NonCovered[i + 66][1];
          box49Page4[`nubc${i + 1}`] = FL49_nubc[i + 66][1];
      };
    };
    if (FL42_Revenue_Code.code89) {
      //Loop for Page5
      for (let i = 0; i < FL42_RevCode.length-88; i++) {
          revCodePage5[`code${i + 1}`] = FL42_RevCode[i + 88][1];
          descriptionPage5[`serv${i + 1}`] = FL43_Descrp[i + 88][1];
          hcpsRatesPage5[`rate${i + 1}`] = FL44_Rates[i + 88][1];
          serviceDatePage5[`date${i + 1}`] = FL45_ServDate[i + 88][1];
          serviceUnitPage5[`unit${i + 1}`] = FL46_ServUnits[i + 88][1];
          totalChargesPage5[`charge${i + 1}`] = FL47_TotalChrgs[i + 88][1];
          nonCoveredChrgsPage5[`nonCov${i + 1}`] = FL48_NonCovered[i + 88][1];
          box49Page5[`nubc${i + 1}`] = FL49_nubc[i + 88][1];
      };
    };
    if (FL42_Revenue_Code.code111) {
      //Loop for Page6
      for (let i = 0; i < FL42_RevCode.length-110; i++) {
          revCodePage6[`code${i + 1}`] = FL42_RevCode[i + 110][1];
          descriptionPage6[`serv${i + 1}`] = FL43_Descrp[i + 110][1];
          hcpsRatesPage6[`rate${i + 1}`] = FL44_Rates[i + 110][1];
          serviceDatePage6[`date${i + 1}`] = FL45_ServDate[i + 110][1];
          serviceUnitPage6[`unit${i + 1}`] = FL46_ServUnits[i + 110][1];
          totalChargesPage6[`charge${i + 1}`] = FL47_TotalChrgs[i + 110][1];
          nonCoveredChrgsPage6[`nonCov${i + 1}`] = FL48_NonCovered[i + 110][1];
          box49Page6[`nubc${i + 1}`] = FL49_nubc[i + 110][1];
      };
    };
    if (FL42_Revenue_Code.code133) {
      //Loop for Page7
      for (let i = 0; i < FL42_RevCode.length-132; i++) {
          revCodePage7[`code${i + 1}`] = FL42_RevCode[i + 132][1];
          descriptionPage7[`serv${i + 1}`] = FL43_Descrp[i + 132][1];
          hcpsRatesPage7[`rate${i + 1}`] = FL44_Rates[i + 132][1];
          serviceDatePage7[`date${i + 1}`] = FL45_ServDate[i + 132][1];
          serviceUnitPage7[`unit${i + 1}`] = FL46_ServUnits[i + 132][1];
          totalChargesPage7[`charge${i + 1}`] = FL47_TotalChrgs[i + 132][1];
          nonCoveredChrgsPage7[`nonCov${i + 1}`] = FL48_NonCovered[i + 132][1];
          box49Page7[`nubc${i + 1}`] = FL49_nubc[i + 132][1];
      };
    };
    if (FL42_Revenue_Code.code155) {
      //Loop for Page8
      for (let i = 0; i < FL42_RevCode.length-154; i++) {
          revCodePage8[`code${i + 1}`] = FL42_RevCode[i + 154][1];
          descriptionPage8[`serv${i + 1}`] = FL43_Descrp[i + 154][1];
          hcpsRatesPage8[`rate${i + 1}`] = FL44_Rates[i + 154][1];
          serviceDatePage8[`date${i + 1}`] = FL45_ServDate[i + 154][1];
          serviceUnitPage8[`unit${i + 1}`] = FL46_ServUnits[i + 154][1];
          totalChargesPage8[`charge${i + 1}`] = FL47_TotalChrgs[i + 154][1];
          nonCoveredChrgsPage8[`nonCov${i + 1}`] = FL48_NonCovered[i + 154][1];
          box49Page8[`nubc${i + 1}`] = FL49_nubc[i + 154][1];
      };
    };
    if (FL42_Revenue_Code.code177) {
      //Loop for Page9
      for (let i = 0; i < FL42_RevCode.length-176; i++) {
          revCodePage9[`code${i + 1}`] = FL42_RevCode[i + 176][1];
          descriptionPage9[`serv${i + 1}`] = FL43_Descrp[i + 176][1];
          hcpsRatesPage9[`rate${i + 1}`] = FL44_Rates[i + 176][1];
          serviceDatePage9[`date${i + 1}`] = FL45_ServDate[i + 176][1];
          serviceUnitPage9[`unit${i + 1}`] = FL46_ServUnits[i + 176][1];
          totalChargesPage9[`charge${i + 1}`] = FL47_TotalChrgs[i + 176][1];
          nonCoveredChrgsPage9[`nonCov${i + 1}`] = FL48_NonCovered[i + 176][1];
          box49Page9[`nubc${i + 1}`] = FL49_nubc[i + 176][1];
      };
    };
    if (FL42_Revenue_Code.code199) {
      //Loop for Page10
      for (let i = 0; i < FL42_RevCode.length-198; i++) {
          revCodePage10[`code${i + 1}`] = FL42_RevCode[i + 198][1];
          descriptionPage10[`serv${i + 1}`] = FL43_Descrp[i + 198][1];
          hcpsRatesPage10[`rate${i + 1}`] = FL44_Rates[i + 198][1];
          serviceDatePage10[`date${i + 1}`] = FL45_ServDate[i + 198][1];
          serviceUnitPage10[`unit${i + 1}`] = FL46_ServUnits[i + 198][1];
          totalChargesPage10[`charge${i + 1}`] = FL47_TotalChrgs[i + 198][1];
          nonCoveredChrgsPage10[`nonCov${i + 1}`] = FL48_NonCovered[i + 198][1];
          box49Page10[`nubc${i + 1}`] = FL49_nubc[i + 198][1];
      };
    };
    if (FL42_Revenue_Code.code221) {
      //Loop for Page11
      for (let i = 0; i < FL42_RevCode.length-220; i++) {
          revCodePage11[`code${i + 1}`] = FL42_RevCode[i + 220][1];
          descriptionPage11[`serv${i + 1}`] = FL43_Descrp[i + 220][1];
          hcpsRatesPage11[`rate${i + 1}`] = FL44_Rates[i + 220][1];
          serviceDatePage11[`date${i + 1}`] = FL45_ServDate[i + 220][1];
          serviceUnitPage11[`unit${i + 1}`] = FL46_ServUnits[i + 220][1];
          totalChargesPage11[`charge${i + 1}`] = FL47_TotalChrgs[i + 220][1];
          nonCoveredChrgsPage11[`nonCov${i + 1}`] = FL48_NonCovered[i + 220][1];
          box49Page11[`nubc${i + 1}`] = FL49_nubc[i + 220][1];
      };
    };
    if (FL42_Revenue_Code.code243) {
      //Loop for Page12
      for (let i = 0; i < FL42_RevCode.length-242; i++) {
          revCodePage12[`code${i + 1}`] = FL42_RevCode[i + 242][1];
          descriptionPage12[`serv${i + 1}`] = FL43_Descrp[i + 242][1];
          hcpsRatesPage12[`rate${i + 1}`] = FL44_Rates[i + 242][1];
          serviceDatePage12[`date${i + 1}`] = FL45_ServDate[i + 242][1];
          serviceUnitPage12[`unit${i + 1}`] = FL46_ServUnits[i + 242][1];
          totalChargesPage12[`charge${i + 1}`] = FL47_TotalChrgs[i + 242][1];
          nonCoveredChrgsPage12[`nonCov${i + 1}`] = FL48_NonCovered[i + 242][1];
          box49Page12[`nubc${i + 1}`] = FL49_nubc[i + 242][1];
      };
    };
    if (FL42_Revenue_Code.code265) {
      //Loop for Page13
      for (let i = 0; i < FL42_RevCode.length-264; i++) {
          revCodePage13[`code${i + 1}`] = FL42_RevCode[i + 264][1];
          descriptionPage13[`serv${i + 1}`] = FL43_Descrp[i + 264][1];
          hcpsRatesPage13[`rate${i + 1}`] = FL44_Rates[i + 264][1];
          serviceDatePage13[`date${i + 1}`] = FL45_ServDate[i + 264][1];
          serviceUnitPage13[`unit${i + 1}`] = FL46_ServUnits[i + 264][1];
          totalChargesPage13[`charge${i + 1}`] = FL47_TotalChrgs[i + 264][1];
          nonCoveredChrgsPage13[`nonCov${i + 1}`] = FL48_NonCovered[i + 264][1];
          box49Page13[`nubc${i + 1}`] = FL49_nubc[i + 264][1];
      };
    };
    if (FL42_Revenue_Code.code287) {
      //Loop for Page14
      for (let i = 0; i < FL42_RevCode.length-286; i++) {
          revCodePage14[`code${i + 1}`] = FL42_RevCode[i + 286][1];
          descriptionPage14[`serv${i + 1}`] = FL43_Descrp[i + 286][1];
          hcpsRatesPage14[`rate${i + 1}`] = FL44_Rates[i + 286][1];
          serviceDatePage14[`date${i + 1}`] = FL45_ServDate[i + 286][1];
          serviceUnitPage14[`unit${i + 1}`] = FL46_ServUnits[i + 286][1];
          totalChargesPage14[`charge${i + 1}`] = FL47_TotalChrgs[i + 286][1];
          nonCoveredChrgsPage14[`nonCov${i + 1}`] = FL48_NonCovered[i + 286][1];
          box49Page14[`nubc${i + 1}`] = FL49_nubc[i + 286][1];
      };
    };
    if (FL42_Revenue_Code.code309) {
      //Loop for Page15
      for (let i = 0; i < FL42_RevCode.length-308; i++) {
          revCodePage15[`code${i + 1}`] = FL42_RevCode[i + 308][1];
          descriptionPage15[`serv${i + 1}`] = FL43_Descrp[i + 308][1];
          hcpsRatesPage15[`rate${i + 1}`] = FL44_Rates[i + 308][1];
          serviceDatePage15[`date${i + 1}`] = FL45_ServDate[i + 308][1];
          serviceUnitPage15[`unit${i + 1}`] = FL46_ServUnits[i + 308][1];
          totalChargesPage15[`charge${i + 1}`] = FL47_TotalChrgs[i + 308][1];
          nonCoveredChrgsPage15[`nonCov${i + 1}`] = FL48_NonCovered[i + 308][1];
          box49Page15[`nubc${i + 1}`] = FL49_nubc[i + 308][1];
      };
    };
    if (FL42_Revenue_Code.code331) {
      //Loop for Page16
      for (let i = 0; i < FL42_RevCode.length-330; i++) {
          revCodePage16[`code${i + 1}`] = FL42_RevCode[i + 330][1];
          descriptionPage16[`serv${i + 1}`] = FL43_Descrp[i + 330][1];
          hcpsRatesPage16[`rate${i + 1}`] = FL44_Rates[i + 330][1];
          serviceDatePage16[`date${i + 1}`] = FL45_ServDate[i + 330][1];
          serviceUnitPage16[`unit${i + 1}`] = FL46_ServUnits[i + 330][1];
          totalChargesPage16[`charge${i + 1}`] = FL47_TotalChrgs[i + 330][1];
          nonCoveredChrgsPage16[`nonCov${i + 1}`] = FL48_NonCovered[i + 330][1];
          box49Page16[`nubc${i + 1}`] = FL49_nubc[i + 330][1];
      };
    };
    if (FL42_Revenue_Code.code353) {
      //Loop for Page17
      for (let i = 0; i < FL42_RevCode.length-352; i++) {
          revCodePage17[`code${i + 1}`] = FL42_RevCode[i + 352][1];
          descriptionPage17[`serv${i + 1}`] = FL43_Descrp[i + 352][1];
          hcpsRatesPage17[`rate${i + 1}`] = FL44_Rates[i + 352][1];
          serviceDatePage17[`date${i + 1}`] = FL45_ServDate[i + 352][1];
          serviceUnitPage17[`unit${i + 1}`] = FL46_ServUnits[i + 352][1];
          totalChargesPage17[`charge${i + 1}`] = FL47_TotalChrgs[i + 352][1];
          nonCoveredChrgsPage17[`nonCov${i + 1}`] = FL48_NonCovered[i + 352][1];
          box49Page17[`nubc${i + 1}`] = FL49_nubc[i + 352][1];
      };
    };
    if (FL42_Revenue_Code.code375) {
      //Loop for Page18
      for (let i = 0; i < FL42_RevCode.length-374; i++) {
          revCodePage18[`code${i + 1}`] = FL42_RevCode[i + 374][1];
          descriptionPage18[`serv${i + 1}`] = FL43_Descrp[i + 374][1];
          hcpsRatesPage18[`rate${i + 1}`] = FL374_Rates[i + 374][1];
          serviceDatePage18[`date${i + 1}`] = FL45_ServDate[i + 374][1];
          serviceUnitPage18[`unit${i + 1}`] = FL46_ServUnits[i + 374][1];
          totalChargesPage18[`charge${i + 1}`] = FL47_TotalChrgs[i + 374][1];
          nonCoveredChrgsPage18[`nonCov${i + 1}`] = FL48_NonCovered[i + 374][1];
          box49Page18[`nubc${i + 1}`] = FL49_nubc[i + 374][1];
      };
    };
    if (FL42_Revenue_Code.code397) {
      //Loop for Page19
      for (let i = 0; i < FL42_RevCode.length-396; i++) {
          revCodePage19[`code${i + 1}`] = FL42_RevCode[i + 396][1];
          descriptionPage19[`serv${i + 1}`] = FL43_Descrp[i + 396][1];
          hcpsRatesPage19[`rate${i + 1}`] = FL44_Rates[i + 396][1];
          serviceDatePage19[`date${i + 1}`] = FL45_ServDate[i + 396][1];
          serviceUnitPage19[`unit${i + 1}`] = FL46_ServUnits[i + 396][1];
          totalChargesPage19[`charge${i + 1}`] = FL47_TotalChrgs[i + 396][1];
          nonCoveredChrgsPage19[`nonCov${i + 1}`] = FL48_NonCovered[i + 396][1];
          box49Page19[`nubc${i + 1}`] = FL49_nubc[i + 396][1];
      };
    };
    if (FL42_Revenue_Code.code419) {
      //Loop for Page20
      for (let i = 0; i < FL42_RevCode.length-418; i++) {
          revCodePage20[`code${i + 1}`] = FL42_RevCode[i + 418][1];
          descriptionPage20[`serv${i + 1}`] = FL43_Descrp[i + 418][1];
          hcpsRatesPage20[`rate${i + 1}`] = FL44_Rates[i + 418][1];
          serviceDatePage20[`date${i + 1}`] = FL45_ServDate[i + 418][1];
          serviceUnitPage20[`unit${i + 1}`] = FL46_ServUnits[i + 418][1];
          totalChargesPage20[`charge${i + 1}`] = FL47_TotalChrgs[i + 418][1];
          nonCoveredChrgsPage20[`nonCov${i + 1}`] = FL48_NonCovered[i + 418][1];
          box49Page20[`nubc${i + 1}`] = FL49_nubc[i + 418][1];
      };
    };
    if (FL42_Revenue_Code.code441) {
      //Loop for Page21
      for (let i = 0; i < FL42_RevCode.length-440; i++) {
          revCodePage21[`code${i + 1}`] = FL42_RevCode[i + 440][1];
          descriptionPage21[`serv${i + 1}`] = FL43_Descrp[i + 440][1];
          hcpsRatesPage21[`rate${i + 1}`] = FL44_Rates[i + 440][1];
          serviceDatePage21[`date${i + 1}`] = FL45_ServDate[i + 440][1];
          serviceUnitPage21[`unit${i + 1}`] = FL46_ServUnits[i + 440][1];
          totalChargesPage21[`charge${i + 1}`] = FL47_TotalChrgs[i + 440][1];
          nonCoveredChrgsPage21[`nonCov${i + 1}`] = FL48_NonCovered[i + 440][1];
          box49Page21[`nubc${i + 1}`] = FL49_nubc[i + 440][1];
      };
    };
    if (FL42_Revenue_Code.code463) {
      //Loop for Page22
      for (let i = 0; i < FL42_RevCode.length-462; i++) {
          revCodePage22[`code${i + 1}`] = FL42_RevCode[i + 462][1];
          descriptionPage22[`serv${i + 1}`] = FL43_Descrp[i + 462][1];
          hcpsRatesPage22[`rate${i + 1}`] = FL44_Rates[i + 462][1];
          serviceDatePage22[`date${i + 1}`] = FL45_ServDate[i + 462][1];
          serviceUnitPage22[`unit${i + 1}`] = FL46_ServUnits[i + 462][1];
          totalChargesPage22[`charge${i + 1}`] = FL47_TotalChrgs[i + 462][1];
          nonCoveredChrgsPage22[`nonCov${i + 1}`] = FL48_NonCovered[i + 462][1];
          box49Page22[`nubc${i + 1}`] = FL49_nubc[i + 462][1];
      };
    };
    if (FL42_Revenue_Code.code485) {
      //Loop for Page23
      for (let i = 0; i < FL42_RevCode.length-484; i++) {
          revCodePage23[`code${i + 1}`] = FL42_RevCode[i + 484][1];
          descriptionPage23[`serv${i + 1}`] = FL43_Descrp[i + 484][1];
          hcpsRatesPage23[`rate${i + 1}`] = FL44_Rates[i + 484][1];
          serviceDatePage23[`date${i + 1}`] = FL45_ServDate[i + 484][1];
          serviceUnitPage23[`unit${i + 1}`] = FL46_ServUnits[i + 484][1];
          totalChargesPage23[`charge${i + 1}`] = FL47_TotalChrgs[i + 484][1];
          nonCoveredChrgsPage23[`nonCov${i + 1}`] = FL48_NonCovered[i + 484][1];
          box49Page23[`nubc${i + 1}`] = FL49_nubc[i + 484][1];
      };
    };
    if (FL42_Revenue_Code.code507) {
      //Loop for Page24
      for (let i = 0; i < FL42_RevCode.length-506; i++) {
          revCodePage24[`code${i + 1}`] = FL42_RevCode[i + 506][1];
          descriptionPage24[`serv${i + 1}`] = FL43_Descrp[i + 506][1];
          hcpsRatesPage24[`rate${i + 1}`] = FL44_Rates[i + 506][1];
          serviceDatePage24[`date${i + 1}`] = FL45_ServDate[i + 506][1];
          serviceUnitPage24[`unit${i + 1}`] = FL46_ServUnits[i + 506][1];
          totalChargesPage24[`charge${i + 1}`] = FL47_TotalChrgs[i + 506][1];
          nonCoveredChrgsPage24[`nonCov${i + 1}`] = FL48_NonCovered[i + 506][1];
          box49Page24[`nubc${i + 1}`] = FL49_nubc[i + 506][1];
      };
    };
    if (FL42_Revenue_Code.code529) {
      //Loop for Page25
      for (let i = 0; i < FL42_RevCode.length-528; i++) {
          revCodePage25[`code${i + 1}`] = FL42_RevCode[i + 528][1];
          descriptionPage25[`serv${i + 1}`] = FL43_Descrp[i + 528][1];
          hcpsRatesPage25[`rate${i + 1}`] = FL44_Rates[i + 528][1];
          serviceDatePage25[`date${i + 1}`] = FL45_ServDate[i + 528][1];
          serviceUnitPage25[`unit${i + 1}`] = FL46_ServUnits[i + 528][1];
          totalChargesPage25[`charge${i + 1}`] = FL47_TotalChrgs[i + 528][1];
          nonCoveredChrgsPage25[`nonCov${i + 1}`] = FL48_NonCovered[i + 528][1];
          box49Page25[`nubc${i + 1}`] = FL49_nubc[i + 528][1];
      };
    };
    if (FL42_Revenue_Code.code551) {
      //Loop for Page26
      for (let i = 0; i < FL42_RevCode.length-550; i++) {
          revCodePage26[`code${i + 1}`] = FL42_RevCode[i + 550][1];
          descriptionPage26[`serv${i + 1}`] = FL43_Descrp[i + 550][1];
          hcpsRatesPage26[`rate${i + 1}`] = FL44_Rates[i + 550][1];
          serviceDatePage26[`date${i + 1}`] = FL45_ServDate[i + 550][1];
          serviceUnitPage26[`unit${i + 1}`] = FL46_ServUnits[i + 550][1];
          totalChargesPage26[`charge${i + 1}`] = FL47_TotalChrgs[i + 550][1];
          nonCoveredChrgsPage26[`nonCov${i + 1}`] = FL48_NonCovered[i + 550][1];
          box49Page26[`nubc${i + 1}`] = FL49_nubc[i + 550][1];
      };
    };
    if (FL42_Revenue_Code.code573) {
      //Loop for Page27
      for (let i = 0; i < FL42_RevCode.length-572; i++) {
          revCodePage27[`code${i + 1}`] = FL42_RevCode[i + 572][1];
          descriptionPage27[`serv${i + 1}`] = FL43_Descrp[i + 572][1];
          hcpsRatesPage27[`rate${i + 1}`] = FL44_Rates[i + 572][1];
          serviceDatePage27[`date${i + 1}`] = FL45_ServDate[i + 572][1];
          serviceUnitPage27[`unit${i + 1}`] = FL46_ServUnits[i + 572][1];
          totalChargesPage27[`charge${i + 1}`] = FL47_TotalChrgs[i + 572][1];
          nonCoveredChrgsPage27[`nonCov${i + 1}`] = FL48_NonCovered[i + 572][1];
          box49Page27[`nubc${i + 1}`] = FL49_nubc[i + 572][1];
      };
    };
    if (FL42_Revenue_Code.code595) {
      //Loop for Page28
      for (let i = 0; i < FL42_RevCode.length-594; i++) {
          revCodePage28[`code${i + 1}`] = FL42_RevCode[i + 594][1];
          descriptionPage28[`serv${i + 1}`] = FL43_Descrp[i + 594][1];
          hcpsRatesPage28[`rate${i + 1}`] = FL44_Rates[i + 594][1];
          serviceDatePage28[`date${i + 1}`] = FL45_ServDate[i + 594][1];
          serviceUnitPage28[`unit${i + 1}`] = FL46_ServUnits[i + 594][1];
          totalChargesPage28[`charge${i + 1}`] = FL47_TotalChrgs[i + 594][1];
          nonCoveredChrgsPage28[`nonCov${i + 1}`] = FL48_NonCovered[i + 594][1];
          box49Page28[`nubc${i + 1}`] = FL49_nubc[i + 594][1];
      };
    };
    if (FL42_Revenue_Code.code617) {
      //Loop for Page29
      for (let i = 0; i < FL42_RevCode.length-616; i++) {
          revCodePage29[`code${i + 1}`] = FL42_RevCode[i + 616][1];
          descriptionPage29[`serv${i + 1}`] = FL43_Descrp[i + 616][1];
          hcpsRatesPage29[`rate${i + 1}`] = FL44_Rates[i + 616][1];
          serviceDatePage29[`date${i + 1}`] = FL45_ServDate[i + 616][1];
          serviceUnitPage29[`unit${i + 1}`] = FL46_ServUnits[i + 616][1];
          totalChargesPage29[`charge${i + 1}`] = FL47_TotalChrgs[i + 616][1];
          nonCoveredChrgsPage29[`nonCov${i + 1}`] = FL48_NonCovered[i + 616][1];
          box49Page29[`nubc${i + 1}`] = FL49_nubc[i + 616][1];
      };
    };
    if (FL42_Revenue_Code.code639) {
      //Loop for Page30
      for (let i = 0; i < FL42_RevCode.length-638; i++) {
          revCodePage30[`code${i + 1}`] = FL42_RevCode[i + 638][1];
          descriptionPage30[`serv${i + 1}`] = FL43_Descrp[i + 638][1];
          hcpsRatesPage30[`rate${i + 1}`] = FL44_Rates[i + 638][1];
          serviceDatePage30[`date${i + 1}`] = FL45_ServDate[i + 638][1];
          serviceUnitPage30[`unit${i + 1}`] = FL46_ServUnits[i + 638][1];
          totalChargesPage30[`charge${i + 1}`] = FL47_TotalChrgs[i + 638][1];
          nonCoveredChrgsPage30[`nonCov${i + 1}`] = FL48_NonCovered[i + 638][1];
          box49Page30[`nubc${i + 1}`] = FL49_nubc[i + 638][1];
      };
    };
    if (FL42_Revenue_Code.code661) {
      //Loop for Page31
      for (let i = 0; i < FL42_RevCode.length-660; i++) {
          revCodePage31[`code${i + 1}`] = FL42_RevCode[i + 660][1];
          descriptionPage31[`serv${i + 1}`] = FL43_Descrp[i + 660][1];
          hcpsRatesPage31[`rate${i + 1}`] = FL44_Rates[i + 660][1];
          serviceDatePage31[`date${i + 1}`] = FL45_ServDate[i + 660][1];
          serviceUnitPage31[`unit${i + 1}`] = FL46_ServUnits[i + 660][1];
          totalChargesPage31[`charge${i + 1}`] = FL47_TotalChrgs[i + 660][1];
          nonCoveredChrgsPage31[`nonCov${i + 1}`] = FL48_NonCovered[i + 660][1];
          box49Page31[`nubc${i + 1}`] = FL49_nubc[i + 660][1];
      };
    };
    if (FL42_Revenue_Code.code683) {
      //Loop for Page32
      for (let i = 0; i < FL42_RevCode.length-682; i++) {
          revCodePage32[`code${i + 1}`] = FL42_RevCode[i + 682][1];
          descriptionPage32[`serv${i + 1}`] = FL43_Descrp[i + 682][1];
          hcpsRatesPage32[`rate${i + 1}`] = FL44_Rates[i + 682][1];
          serviceDatePage32[`date${i + 1}`] = FL45_ServDate[i + 682][1];
          serviceUnitPage32[`unit${i + 1}`] = FL46_ServUnits[i + 682][1];
          totalChargesPage32[`charge${i + 1}`] = FL47_TotalChrgs[i + 682][1];
          nonCoveredChrgsPage32[`nonCov${i + 1}`] = FL48_NonCovered[i + 682][1];
          box49Page32[`nubc${i + 1}`] = FL49_nubc[i + 682][1];
      };
    };
    if (FL42_Revenue_Code.code705) {
      //Loop for Page33
      for (let i = 0; i < FL42_RevCode.length-704; i++) {
          revCodePage33[`code${i + 1}`] = FL42_RevCode[i + 704][1];
          descriptionPage33[`serv${i + 1}`] = FL43_Descrp[i + 704][1];
          hcpsRatesPage33[`rate${i + 1}`] = FL44_Rates[i + 704][1];
          serviceDatePage33[`date${i + 1}`] = FL45_ServDate[i + 704][1];
          serviceUnitPage33[`unit${i + 1}`] = FL46_ServUnits[i + 704][1];
          totalChargesPage33[`charge${i + 1}`] = FL47_TotalChrgs[i + 704][1];
          nonCoveredChrgsPage33[`nonCov${i + 1}`] = FL48_NonCovered[i + 704][1];
          box49Page33[`nubc${i + 1}`] = FL49_nubc[i + 704][1];
      };
    };
    if (FL42_Revenue_Code.code727) {
      //Loop for Page34
      for (let i = 0; i < FL42_RevCode.length-726; i++) {
          revCodePage34[`code${i + 1}`] = FL42_RevCode[i + 726][1];
          descriptionPage34[`serv${i + 1}`] = FL43_Descrp[i + 726][1];
          hcpsRatesPage34[`rate${i + 1}`] = FL44_Rates[i + 726][1];
          serviceDatePage34[`date${i + 1}`] = FL45_ServDate[i + 726][1];
          serviceUnitPage34[`unit${i + 1}`] = FL46_ServUnits[i + 726][1];
          totalChargesPage34[`charge${i + 1}`] = FL47_TotalChrgs[i + 726][1];
          nonCoveredChrgsPage34[`nonCov${i + 1}`] = FL48_NonCovered[i + 726][1];
          box49Page34[`nubc${i + 1}`] = FL49_nubc[i + 726][1];
      };
    };
    if (FL42_Revenue_Code.code749) {
      //Loop for Page35
      for (let i = 0; i < FL42_RevCode.length-748; i++) {
          revCodePage35[`code${i + 1}`] = FL42_RevCode[i + 748][1];
          descriptionPage35[`serv${i + 1}`] = FL43_Descrp[i + 748][1];
          hcpsRatesPage35[`rate${i + 1}`] = FL44_Rates[i + 748][1];
          serviceDatePage35[`date${i + 1}`] = FL45_ServDate[i + 748][1];
          serviceUnitPage35[`unit${i + 1}`] = FL46_ServUnits[i + 748][1];
          totalChargesPage35[`charge${i + 1}`] = FL47_TotalChrgs[i + 748][1];
          nonCoveredChrgsPage35[`nonCov${i + 1}`] = FL48_NonCovered[i + 748][1];
          box49Page35[`nubc${i + 1}`] = FL49_nubc[i + 748][1];
      };
    };
    if (FL42_Revenue_Code.code771) {
      //Loop for Page36
      for (let i = 0; i < FL42_RevCode.length-770; i++) {
          revCodePage36[`code${i + 1}`] = FL42_RevCode[i + 770][1];
          descriptionPage36[`serv${i + 1}`] = FL43_Descrp[i + 770][1];
          hcpsRatesPage36[`rate${i + 1}`] = FL44_Rates[i + 770][1];
          serviceDatePage36[`date${i + 1}`] = FL45_ServDate[i + 770][1];
          serviceUnitPage36[`unit${i + 1}`] = FL46_ServUnits[i + 770][1];
          totalChargesPage36[`charge${i + 1}`] = FL47_TotalChrgs[i + 770][1];
          nonCoveredChrgsPage36[`nonCov${i + 1}`] = FL48_NonCovered[i + 770][1];
          box49Page36[`nubc${i + 1}`] = FL49_nubc[i + 770][1];
      };
    };
    if (FL42_Revenue_Code.code793) {
      //Loop for Page37
      for (let i = 0; i < FL42_RevCode.length-792; i++) {
          revCodePage37[`code${i + 1}`] = FL42_RevCode[i + 792][1];
          descriptionPage37[`serv${i + 1}`] = FL43_Descrp[i + 792][1];
          hcpsRatesPage37[`rate${i + 1}`] = FL44_Rates[i + 792][1];
          serviceDatePage37[`date${i + 1}`] = FL45_ServDate[i + 792][1];
          serviceUnitPage37[`unit${i + 1}`] = FL46_ServUnits[i + 792][1];
          totalChargesPage37[`charge${i + 1}`] = FL47_TotalChrgs[i + 792][1];
          nonCoveredChrgsPage37[`nonCov${i + 1}`] = FL48_NonCovered[i + 792][1];
          box49Page37[`nubc${i + 1}`] = FL49_nubc[i + 792][1];
      };
    };
    if (FL42_Revenue_Code.code815) {
      //Loop for Page38
      for (let i = 0; i < FL42_RevCode.length-814; i++) {
          revCodePage38[`code${i + 1}`] = FL42_RevCode[i + 814][1];
          descriptionPage38[`serv${i + 1}`] = FL43_Descrp[i + 814][1];
          hcpsRatesPage38[`rate${i + 1}`] = FL44_Rates[i + 814][1];
          serviceDatePage38[`date${i + 1}`] = FL45_ServDate[i + 814][1];
          serviceUnitPage38[`unit${i + 1}`] = FL46_ServUnits[i + 814][1];
          totalChargesPage38[`charge${i + 1}`] = FL47_TotalChrgs[i + 814][1];
          nonCoveredChrgsPage38[`nonCov${i + 1}`] = FL48_NonCovered[i + 814][1];
          box49Page38[`nubc${i + 1}`] = FL49_nubc[i + 814][1];
      };
    };
    if (FL42_Revenue_Code.code837) {
      //Loop for Page39
      for (let i = 0; i < FL42_RevCode.length-836; i++) {
          revCodePage39[`code${i + 1}`] = FL42_RevCode[i + 836][1];
          descriptionPage39[`serv${i + 1}`] = FL43_Descrp[i + 836][1];
          hcpsRatesPage39[`rate${i + 1}`] = FL44_Rates[i + 836][1];
          serviceDatePage39[`date${i + 1}`] = FL45_ServDate[i + 836][1];
          serviceUnitPage39[`unit${i + 1}`] = FL46_ServUnits[i + 836][1];
          totalChargesPage39[`charge${i + 1}`] = FL47_TotalChrgs[i + 836][1];
          nonCoveredChrgsPage39[`nonCov${i + 1}`] = FL48_NonCovered[i + 836][1];
          box49Page39[`nubc${i + 1}`] = FL49_nubc[i + 836][1];
      };
    };
    if (FL42_Revenue_Code.code859) {
      //Loop for Page40
      for (let i = 0; i < FL42_RevCode.length-858; i++) {
          revCodePage40[`code${i + 1}`] = FL42_RevCode[i + 858][1];
          descriptionPage40[`serv${i + 1}`] = FL43_Descrp[i + 858][1];
          hcpsRatesPage40[`rate${i + 1}`] = FL44_Rates[i + 858][1];
          serviceDatePage40[`date${i + 1}`] = FL45_ServDate[i + 858][1];
          serviceUnitPage40[`unit${i + 1}`] = FL46_ServUnits[i + 858][1];
          totalChargesPage40[`charge${i + 1}`] = FL47_TotalChrgs[i + 858][1];
          nonCoveredChrgsPage40[`nonCov${i + 1}`] = FL48_NonCovered[i + 858][1];
          box49Page40[`nubc${i + 1}`] = FL49_nubc[i + 858][1];
      };
    };
    if (FL42_Revenue_Code.code881) {
      //Loop for Page41
      for (let i = 0; i < FL42_RevCode.length-880; i++) {
          revCodePage41[`code${i + 1}`] = FL42_RevCode[i + 880][1];
          descriptionPage41[`serv${i + 1}`] = FL43_Descrp[i + 880][1];
          hcpsRatesPage41[`rate${i + 1}`] = FL44_Rates[i + 880][1];
          serviceDatePage41[`date${i + 1}`] = FL45_ServDate[i + 880][1];
          serviceUnitPage41[`unit${i + 1}`] = FL46_ServUnits[i + 880][1];
          totalChargesPage41[`charge${i + 1}`] = FL47_TotalChrgs[i + 880][1];
          nonCoveredChrgsPage41[`nonCov${i + 1}`] = FL48_NonCovered[i + 880][1];
          box49Page41[`nubc${i + 1}`] = FL49_nubc[i + 880][1];
      };
    };
    if (FL42_Revenue_Code.code903) {
      //Loop for Page42
      for (let i = 0; i < FL42_RevCode.length-902; i++) {
          revCodePage42[`code${i + 1}`] = FL42_RevCode[i + 902][1]; descriptionPage42[`serv${i + 1}`] = FL43_Descrp[i + 902][1];
          hcpsRatesPage42[`rate${i + 1}`] = FL44_Rates[i + 902][1];
          serviceDatePage42[`date${i + 1}`] = FL45_ServDate[i + 902][1];
          serviceUnitPage42[`unit${i + 1}`] = FL46_ServUnits[i + 902][1];
          totalChargesPage42[`charge${i + 1}`] = FL47_TotalChrgs[i + 902][1];
          nonCoveredChrgsPage42[`nonCov${i + 1}`] = FL48_NonCovered[i + 902][1];
          box49Page42[`nubc${i + 1}`] = FL49_nubc[i + 902][1];
      };
    };
    if (FL42_Revenue_Code.code925) {
      //Loop for Page43
      for (let i = 0; i < FL42_RevCode.length-924; i++) {
          revCodePage43[`code${i + 1}`] = FL42_RevCode[i + 924][1];
          descriptionPage43[`serv${i + 1}`] = FL43_Descrp[i + 924][1];
          hcpsRatesPage43[`rate${i + 1}`] = FL44_Rates[i + 924][1];
          serviceDatePage43[`date${i + 1}`] = FL45_ServDate[i + 924][1];
          serviceUnitPage43[`unit${i + 1}`] = FL46_ServUnits[i + 924][1];
          totalChargesPage43[`charge${i + 1}`] = FL47_TotalChrgs[i + 924][1];
          nonCoveredChrgsPage43[`nonCov${i + 1}`] = FL48_NonCovered[i + 924][1];
          box49Page43[`nubc${i + 1}`] = FL49_nubc[i + 924][1];
      };
    };
    if (FL42_Revenue_Code.code947) {
      //Loop for Page44
      for (let i = 0; i < FL42_RevCode.length-946; i++) {
          revCodePage44[`code${i + 1}`] = FL42_RevCode[i + 946][1];
          descriptionPage44[`serv${i + 1}`] = FL43_Descrp[i + 946][1];
          hcpsRatesPage44[`rate${i + 1}`] = FL44_Rates[i + 946][1];
          serviceDatePage44[`date${i + 1}`] = FL45_ServDate[i + 946][1];
          serviceUnitPage44[`unit${i + 1}`] = FL46_ServUnits[i + 946][1];
          totalChargesPage44[`charge${i + 1}`] = FL47_TotalChrgs[i + 946][1];
          nonCoveredChrgsPage44[`nonCov${i + 1}`] = FL48_NonCovered[i + 946][1];
          box49Page44[`nubc${i + 1}`] = FL49_nubc[i + 946][1];
      };
    };
    if (FL42_Revenue_Code.code969) {
      //Loop for Page45
      for (let i = 0; i < FL42_RevCode.length-968; i++) {
          revCodePage45[`code${i + 1}`] = FL42_RevCode[i + 968][1];
          descriptionPage45[`serv${i + 1}`] = FL43_Descrp[i + 968][1];
          hcpsRatesPage45[`rate${i + 1}`] = FL44_Rates[i + 968][1];
          serviceDatePage45[`date${i + 1}`] = FL45_ServDate[i + 968][1];
          serviceUnitPage45[`unit${i + 1}`] = FL46_ServUnits[i + 968][1];
          totalChargesPage45[`charge${i + 1}`] = FL47_TotalChrgs[i + 968][1];
          nonCoveredChrgsPage45[`nonCov${i + 1}`] = FL48_NonCovered[i + 968][1];
          box49Page45[`nubc${i + 1}`] = FL49_nubc[i + 968][1];
      };
    };
    if (FL42_Revenue_Code.code991) {
      //Loop for Page46
      for (let i = 0; i < FL42_RevCode.length-990; i++) {
          revCodePage46[`code${i + 1}`] = FL42_RevCode[i + 990][1];
          descriptionPage46[`serv${i + 1}`] = FL43_Descrp[i + 990][1];
          hcpsRatesPage46[`rate${i + 1}`] = FL44_Rates[i + 990][1];
          serviceDatePage46[`date${i + 1}`] = FL45_ServDate[i + 990][1];
          serviceUnitPage46[`unit${i + 1}`] = FL46_ServUnits[i + 990][1];
          totalChargesPage46[`charge${i + 1}`] = FL47_TotalChrgs[i + 990][1];
          nonCoveredChrgsPage46[`nonCov${i + 1}`] = FL48_NonCovered[i + 990][1];
          box49Page46[`nubc${i + 1}`] = FL49_nubc[i + 990][1];
      };
    };

    const handlebarsPg1 = [revCodePage1, descriptionPage1, hcpsRatesPage1, serviceDatePage1, serviceUnitPage1, totalChargesPage1, nonCoveredChrgsPage1, box49Page1, result, page1]
    // console.log(handlebarsPg1)
    const handlebarsPg2 = [revCodePage2, descriptionPage2, hcpsRatesPage2, serviceDatePage2, serviceUnitPage2, totalChargesPage2, nonCoveredChrgsPage2, box49Page2, result, page2]
    // console.log(handlebarsPg2)
    const handlebarsPg3 = [revCodePage3, descriptionPage3, hcpsRatesPage3, serviceDatePage3, serviceUnitPage3, totalChargesPage3, nonCoveredChrgsPage3, box49Page3, result, page3]
    const handlebarsPg4 = [revCodePage4, descriptionPage4, hcpsRatesPage4, serviceDatePage4, serviceUnitPage4, totalChargesPage4, nonCoveredChrgsPage4, box49Page4, result, page4]
    const handlebarsPg5 = [revCodePage5, descriptionPage5, hcpsRatesPage5, serviceDatePage5, serviceUnitPage5, totalChargesPage5, nonCoveredChrgsPage5, box49Page5, result, page5]
    const handlebarsPg6 = [revCodePage6, descriptionPage6, hcpsRatesPage6, serviceDatePage6, serviceUnitPage6, totalChargesPage6, nonCoveredChrgsPage6, box49Page6, result, page6]
    const handlebarsPg7 = [revCodePage7, descriptionPage7, hcpsRatesPage7, serviceDatePage7, serviceUnitPage7, totalChargesPage7, nonCoveredChrgsPage7, box49Page7, result, page7]
    const handlebarsPg8 = [revCodePage8, descriptionPage8, hcpsRatesPage8, serviceDatePage8, serviceUnitPage8, totalChargesPage8, nonCoveredChrgsPage8, box49Page8, result, page8]
    const handlebarsPg9 = [revCodePage9, descriptionPage9, hcpsRatesPage9, serviceDatePage9, serviceUnitPage9, totalChargesPage9, nonCoveredChrgsPage9, box49Page9, result, page9]
    const handlebarsPg10 = [revCodePage10, descriptionPage10, hcpsRatesPage10, serviceDatePage10, serviceUnitPage10, totalChargesPage10, nonCoveredChrgsPage10, box49Page10, result, page10]
    const handlebarsPg11 = [revCodePage11, descriptionPage11, hcpsRatesPage11, serviceDatePage11, serviceUnitPage11, totalChargesPage11, nonCoveredChrgsPage11, box49Page11, result, page11]
    const handlebarsPg12 = [revCodePage12, descriptionPage12, hcpsRatesPage12, serviceDatePage12, serviceUnitPage12, totalChargesPage12, nonCoveredChrgsPage12, box49Page12, result, page12]
    const handlebarsPg13 = [revCodePage13, descriptionPage13, hcpsRatesPage13, serviceDatePage13, serviceUnitPage13, totalChargesPage13, nonCoveredChrgsPage13, box49Page13, result, page13]
    const handlebarsPg14 = [revCodePage14, descriptionPage14, hcpsRatesPage14, serviceDatePage14, serviceUnitPage14, totalChargesPage14, nonCoveredChrgsPage14, box49Page14, result, page14]
    const handlebarsPg15 = [revCodePage15, descriptionPage15, hcpsRatesPage15, serviceDatePage15, serviceUnitPage15, totalChargesPage15, nonCoveredChrgsPage15, box49Page15, result, page15]
    const handlebarsPg16 = [revCodePage16, descriptionPage16, hcpsRatesPage16, serviceDatePage16, serviceUnitPage16, totalChargesPage16, nonCoveredChrgsPage16, box49Page16, result, page16]
    const handlebarsPg17 = [revCodePage17, descriptionPage17, hcpsRatesPage17, serviceDatePage17, serviceUnitPage17, totalChargesPage17, nonCoveredChrgsPage17, box49Page17, result, page17]
    const handlebarsPg18 = [revCodePage18, descriptionPage18, hcpsRatesPage18, serviceDatePage18, serviceUnitPage18, totalChargesPage18, nonCoveredChrgsPage18, box49Page18, result, page18]
    const handlebarsPg19 = [revCodePage19, descriptionPage19, hcpsRatesPage19, serviceDatePage19, serviceUnitPage19, totalChargesPage19, nonCoveredChrgsPage19, box49Page19, result, page19]
    const handlebarsPg20 = [revCodePage20, descriptionPage20, hcpsRatesPage20, serviceDatePage20, serviceUnitPage20, totalChargesPage20, nonCoveredChrgsPage20, box49Page20, result, page20]
    const handlebarsPg21 = [revCodePage21, descriptionPage21, hcpsRatesPage21, serviceDatePage21, serviceUnitPage21, totalChargesPage21, nonCoveredChrgsPage21, box49Page21, result, page21]
    const handlebarsPg22 = [revCodePage22, descriptionPage22, hcpsRatesPage22, serviceDatePage22, serviceUnitPage22, totalChargesPage22, nonCoveredChrgsPage22, box49Page22, result, page22]
    const handlebarsPg23 = [revCodePage23, descriptionPage23, hcpsRatesPage23, serviceDatePage23, serviceUnitPage23, totalChargesPage23, nonCoveredChrgsPage23, box49Page23, result, page23]
    const handlebarsPg24 = [revCodePage24, descriptionPage24, hcpsRatesPage24, serviceDatePage24, serviceUnitPage24, totalChargesPage24, nonCoveredChrgsPage24, box49Page24, result, page24]
    const handlebarsPg25 = [revCodePage25, descriptionPage25, hcpsRatesPage25, serviceDatePage25, serviceUnitPage25, totalChargesPage25, nonCoveredChrgsPage25, box49Page25, result, page25]
    const handlebarsPg26 = [revCodePage26, descriptionPage26, hcpsRatesPage26, serviceDatePage26, serviceUnitPage26, totalChargesPage26, nonCoveredChrgsPage26, box49Page26, result, page26]
    const handlebarsPg27 = [revCodePage27, descriptionPage27, hcpsRatesPage27, serviceDatePage27, serviceUnitPage27, totalChargesPage27, nonCoveredChrgsPage27, box49Page27, result, page27]
    const handlebarsPg28 = [revCodePage28, descriptionPage28, hcpsRatesPage28, serviceDatePage28, serviceUnitPage28, totalChargesPage28, nonCoveredChrgsPage28, box49Page28, result, page28]
    const handlebarsPg29 = [revCodePage29, descriptionPage29, hcpsRatesPage29, serviceDatePage29, serviceUnitPage29, totalChargesPage29, nonCoveredChrgsPage29, box49Page29, result, page29]
    const handlebarsPg30 = [revCodePage30, descriptionPage30, hcpsRatesPage30, serviceDatePage30, serviceUnitPage30, totalChargesPage30, nonCoveredChrgsPage30, box49Page30, result, page30]
    const handlebarsPg31 = [revCodePage31, descriptionPage31, hcpsRatesPage31, serviceDatePage31, serviceUnitPage31, totalChargesPage31, nonCoveredChrgsPage31, box49Page31, result, page31]
    const handlebarsPg32 = [revCodePage32, descriptionPage32, hcpsRatesPage32, serviceDatePage32, serviceUnitPage32, totalChargesPage32, nonCoveredChrgsPage32, box49Page32, result, page32]
    const handlebarsPg33 = [revCodePage33, descriptionPage33, hcpsRatesPage33, serviceDatePage33, serviceUnitPage33, totalChargesPage33, nonCoveredChrgsPage33, box49Page33, result, page33]
    const handlebarsPg34 = [revCodePage34, descriptionPage34, hcpsRatesPage34, serviceDatePage34, serviceUnitPage34, totalChargesPage34, nonCoveredChrgsPage34, box49Page34, result, page34]
    const handlebarsPg35 = [revCodePage35, descriptionPage35, hcpsRatesPage35, serviceDatePage35, serviceUnitPage35, totalChargesPage35, nonCoveredChrgsPage35, box49Page35, result, page35]
    const handlebarsPg36 = [revCodePage36, descriptionPage36, hcpsRatesPage36, serviceDatePage36, serviceUnitPage36, totalChargesPage36, nonCoveredChrgsPage36, box49Page36, result, page36]
    const handlebarsPg37 = [revCodePage37, descriptionPage37, hcpsRatesPage37, serviceDatePage37, serviceUnitPage37, totalChargesPage37, nonCoveredChrgsPage37, box49Page37, result, page37]
    const handlebarsPg38 = [revCodePage38, descriptionPage38, hcpsRatesPage38, serviceDatePage38, serviceUnitPage38, totalChargesPage38, nonCoveredChrgsPage38, box49Page38, result, page38]
    const handlebarsPg39 = [revCodePage39, descriptionPage39, hcpsRatesPage39, serviceDatePage39, serviceUnitPage39, totalChargesPage39, nonCoveredChrgsPage39, box49Page39, result, page39]
    const handlebarsPg40 = [revCodePage40, descriptionPage40, hcpsRatesPage40, serviceDatePage40, serviceUnitPage40, totalChargesPage40, nonCoveredChrgsPage40, box49Page40, result, page40]
    const handlebarsPg41 = [revCodePage41, descriptionPage41, hcpsRatesPage41, serviceDatePage41, serviceUnitPage41, totalChargesPage41, nonCoveredChrgsPage41, box49Page41, result, page41]
    const handlebarsPg42 = [revCodePage42, descriptionPage42, hcpsRatesPage42, serviceDatePage42, serviceUnitPage42, totalChargesPage42, nonCoveredChrgsPage42, box49Page42, result, page42]
    const handlebarsPg43 = [revCodePage43, descriptionPage43, hcpsRatesPage43, serviceDatePage43, serviceUnitPage43, totalChargesPage43, nonCoveredChrgsPage43, box49Page43, result, page43]
    const handlebarsPg44 = [revCodePage44, descriptionPage44, hcpsRatesPage44, serviceDatePage44, serviceUnitPage44, totalChargesPage44, nonCoveredChrgsPage44, box49Page44, result, page44]
    const handlebarsPg45 = [revCodePage45, descriptionPage45, hcpsRatesPage45, serviceDatePage45, serviceUnitPage45, totalChargesPage45, nonCoveredChrgsPage45, box49Page45, result, page45]
    const handlebarsPg46 = [revCodePage46, descriptionPage46, hcpsRatesPage46, serviceDatePage46, serviceUnitPage46, totalChargesPage46, nonCoveredChrgsPage46, box49Page46, result, page46]

    const allArrays = [handlebarsPg1, handlebarsPg2, handlebarsPg3, handlebarsPg4, handlebarsPg5, handlebarsPg6, handlebarsPg7, handlebarsPg8, handlebarsPg9, handlebarsPg10, handlebarsPg11, handlebarsPg12, handlebarsPg13, handlebarsPg14, handlebarsPg15, handlebarsPg16, handlebarsPg17, handlebarsPg18, handlebarsPg19, handlebarsPg20, handlebarsPg21, handlebarsPg22, handlebarsPg23, handlebarsPg24, handlebarsPg25, handlebarsPg26, handlebarsPg27, handlebarsPg28, handlebarsPg29, handlebarsPg30, handlebarsPg31, handlebarsPg32, handlebarsPg33, handlebarsPg34, handlebarsPg35, handlebarsPg36, handlebarsPg37, handlebarsPg38, handlebarsPg39, handlebarsPg40, handlebarsPg41, handlebarsPg42, handlebarsPg43, handlebarsPg44, handlebarsPg45, handlebarsPg46]
    //check if key from page 1 exist
    for (let i = 0; i < allArrays.length; i++) {
      if (allArrays[i][0].code1) {
        allPages.push(allArrays[i]);
      };
    }
    // console.log(handlebarsPg1)
    

    // for (let i = 1 ; i <= 46; i++){

    //   let currentPage = new RegExp(["handlebarsPg"+i]);
    //   currentPage = (currentPage.replace(/\//g, ""));
    //   // let cPage = this.window[currentPage]
    //   console.log(currentPage)

    //     if (currentPage[0].code1){
    //       allPages.push(currentPage);
    //     };
    // }


    res.render("ub04form", {
      layouts: "main",
      object: allPages,
      id: id
    });

  }).catch(err => console.log(err))

};
