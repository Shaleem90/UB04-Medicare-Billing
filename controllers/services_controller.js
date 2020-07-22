const db = require("../models");

exports.ub04services = function (req, res) {

  //calls long table to fill in more of the ub04space
  db.dbo_UB04LineItem.findOne({
    where: {
      // id: 1
      id: req.params.id
    }

  }).then(response => {

    // Grabbing object from DB
    const FL42_Revenue_Code = JSON.parse(response.dataValues.FL42_Revenue_Code);
    const FL43_Description = JSON.parse(response.dataValues.FL43_Description);
    const FL44_HCPS_Rates = JSON.parse(response.dataValues.FL44_HCPS_Rates);
    const FL45_Service_Date = JSON.parse(response.dataValues.FL45_Service_Date);
    const FL46_Service_Units = JSON.parse(response.dataValues.FL46_Service_Units);
    const FL47_Total_Charges = JSON.parse(response.dataValues.FL47_Total_Charges);
    const FL48_Noncovered_Charges = JSON.parse(response.dataValues.FL48_Noncovered_Charges);
    const FL49 = JSON.parse(response.dataValues.FL49);

    ///If we are on a specific page, we take the values of the respective input and overwrite the proper element on the parsed object above

    const page = parseInt(req.body.page)
    //FL_42 COLUMN
    if (page === 1) {
      FL42_Revenue_Code[`code${page}`] = req.body['form[FL42_Revenue_Code1]'];
      FL42_Revenue_Code[`code${page + 1}`] = req.body['form[FL42_Revenue_Code2]'];
      FL42_Revenue_Code[`code${page + 2}`] = req.body['form[FL42_Revenue_Code3]'];
      FL42_Revenue_Code[`code${page + 3}`] = req.body['form[FL42_Revenue_Code4]'];
      FL42_Revenue_Code[`code${page + 4}`] = req.body['form[FL42_Revenue_Code5]'];
      FL42_Revenue_Code[`code${page + 5}`] = req.body['form[FL42_Revenue_Code6]'];
      FL42_Revenue_Code[`code${page + 6}`] = req.body['form[FL42_Revenue_Code7]'];
      FL42_Revenue_Code[`code${page + 7}`] = req.body['form[FL42_Revenue_Code8]'];
      FL42_Revenue_Code[`code${page + 8}`] = req.body['form[FL42_Revenue_Code9]'];
      FL42_Revenue_Code[`code${page + 9}`] = req.body['form[FL42_Revenue_Code10]'];
      FL42_Revenue_Code[`code${page + 10}`] = req.body['form[FL42_Revenue_Code11]'];
      FL42_Revenue_Code[`code${page + 11}`] = req.body['form[FL42_Revenue_Code12]'];
      FL42_Revenue_Code[`code${page + 12}`] = req.body['form[FL42_Revenue_Code13]'];
      FL42_Revenue_Code[`code${page + 13}`] = req.body['form[FL42_Revenue_Code14]'];
      FL42_Revenue_Code[`code${page + 14}`] = req.body['form[FL42_Revenue_Code15]'];
      FL42_Revenue_Code[`code${page + 15}`] = req.body['form[FL42_Revenue_Code16]'];
      FL42_Revenue_Code[`code${page + 16}`] = req.body['form[FL42_Revenue_Code17]'];
      FL42_Revenue_Code[`code${page + 17}`] = req.body['form[FL42_Revenue_Code18]'];
      FL42_Revenue_Code[`code${page + 18}`] = req.body['form[FL42_Revenue_Code19]'];
      FL42_Revenue_Code[`code${page + 19}`] = req.body['form[FL42_Revenue_Code20]'];
      FL42_Revenue_Code[`code${page + 20}`] = req.body['form[FL42_Revenue_Code21]'];
      FL42_Revenue_Code[`code${page + 21}`] = req.body['form[FL42_Revenue_Code22]'];
    } else if (page > 1) {
      FL42_Revenue_Code[`code${(page - 1) * 22 + 1}`] = req.body['form[FL42_Revenue_Code1]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 2}`] = req.body['form[FL42_Revenue_Code2]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 3}`] = req.body['form[FL42_Revenue_Code3]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 4}`] = req.body['form[FL42_Revenue_Code4]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 5}`] = req.body['form[FL42_Revenue_Code5]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 6}`] = req.body['form[FL42_Revenue_Code6]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 7}`] = req.body['form[FL42_Revenue_Code7]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 8}`] = req.body['form[FL42_Revenue_Code8]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 9}`] = req.body['form[FL42_Revenue_Code9]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 10}`] = req.body['form[FL42_Revenue_Code10]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 11}`] = req.body['form[FL42_Revenue_Code11]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 12}`] = req.body['form[FL42_Revenue_Code12]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 13}`] = req.body['form[FL42_Revenue_Code13]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 14}`] = req.body['form[FL42_Revenue_Code14]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 15}`] = req.body['form[FL42_Revenue_Code15]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 16}`] = req.body['form[FL42_Revenue_Code16]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 17}`] = req.body['form[FL42_Revenue_Code17]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 18}`] = req.body['form[FL42_Revenue_Code18]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 19}`] = req.body['form[FL42_Revenue_Code19]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 20}`] = req.body['form[FL42_Revenue_Code20]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 21}`] = req.body['form[FL42_Revenue_Code21]'];
      FL42_Revenue_Code[`code${(page - 1) * 22 + 22}`] = req.body['form[FL42_Revenue_Code22]'];
    }

    response.update(
      {
        FL42_Revenue_Code: JSON.stringify(FL42_Revenue_Code)
      }
    ).then(res => {
      console.log(res);
    })

    ///FL_43 COLUMN
    if (page === 1) {
      FL43_Description[`serv${page}`] = req.body['form[FL43_Description1]'];
      FL43_Description[`serv${page + 1}`] = req.body['form[FL43_Description2]'];
      FL43_Description[`serv${page + 2}`] = req.body['form[FL43_Description3]'];
      FL43_Description[`serv${page + 3}`] = req.body['form[FL43_Description4]'];
      FL43_Description[`serv${page + 4}`] = req.body['form[FL43_Description5]'];
      FL43_Description[`serv${page + 5}`] = req.body['form[FL43_Description6]'];
      FL43_Description[`serv${page + 6}`] = req.body['form[FL43_Description7]'];
      FL43_Description[`serv${page + 7}`] = req.body['form[FL43_Description8]'];
      FL43_Description[`serv${page + 8}`] = req.body['form[FL43_Description9]'];
      FL43_Description[`serv${page + 9}`] = req.body['form[FL43_Description10]'];
      FL43_Description[`serv${page + 10}`] = req.body['form[FL43_Description11]'];
      FL43_Description[`serv${page + 11}`] = req.body['form[FL43_Description12]'];
      FL43_Description[`serv${page + 12}`] = req.body['form[FL43_Description13]'];
      FL43_Description[`serv${page + 13}`] = req.body['form[FL43_Description14]'];
      FL43_Description[`serv${page + 14}`] = req.body['form[FL43_Description15]'];
      FL43_Description[`serv${page + 15}`] = req.body['form[FL43_Description16]'];
      FL43_Description[`serv${page + 16}`] = req.body['form[FL43_Description17]'];
      FL43_Description[`serv${page + 17}`] = req.body['form[FL43_Description18]'];
      FL43_Description[`serv${page + 18}`] = req.body['form[FL43_Description19]'];
      FL43_Description[`serv${page + 19}`] = req.body['form[FL43_Description20]'];
      FL43_Description[`serv${page + 20}`] = req.body['form[FL43_Description21]'];
      FL43_Description[`serv${page + 21}`] = req.body['form[FL43_Description22]'];
    } else if (page > 1) {
      FL43_Description[`serv${(page - 1) * 22 + 1}`] = req.body['form[FL43_Description1]'];
      FL43_Description[`serv${(page - 1) * 22 + 2}`] = req.body['form[FL43_Description2]'];
      FL43_Description[`serv${(page - 1) * 22 + 3}`] = req.body['form[FL43_Description3]'];
      FL43_Description[`serv${(page - 1) * 22 + 4}`] = req.body['form[FL43_Description4]'];
      FL43_Description[`serv${(page - 1) * 22 + 5}`] = req.body['form[FL43_Description5]'];
      FL43_Description[`serv${(page - 1) * 22 + 6}`] = req.body['form[FL43_Description6]'];
      FL43_Description[`serv${(page - 1) * 22 + 7}`] = req.body['form[FL43_Description7]'];
      FL43_Description[`serv${(page - 1) * 22 + 8}`] = req.body['form[FL43_Description8]'];
      FL43_Description[`serv${(page - 1) * 22 + 9}`] = req.body['form[FL43_Description9]'];
      FL43_Description[`serv${(page - 1) * 22 + 10}`] = req.body['form[FL43_Description10]'];
      FL43_Description[`serv${(page - 1) * 22 + 11}`] = req.body['form[FL43_Description11]'];
      FL43_Description[`serv${(page - 1) * 22 + 12}`] = req.body['form[FL43_Description12]'];
      FL43_Description[`serv${(page - 1) * 22 + 13}`] = req.body['form[FL43_Description13]'];
      FL43_Description[`serv${(page - 1) * 22 + 14}`] = req.body['form[FL43_Description14]'];
      FL43_Description[`serv${(page - 1) * 22 + 15}`] = req.body['form[FL43_Description15]'];
      FL43_Description[`serv${(page - 1) * 22 + 16}`] = req.body['form[FL43_Description16]'];
      FL43_Description[`serv${(page - 1) * 22 + 17}`] = req.body['form[FL43_Description17]'];
      FL43_Description[`serv${(page - 1) * 22 + 18}`] = req.body['form[FL43_Description18]'];
      FL43_Description[`serv${(page - 1) * 22 + 19}`] = req.body['form[FL43_Description19]'];
      FL43_Description[`serv${(page - 1) * 22 + 20}`] = req.body['form[FL43_Description20]'];
      FL43_Description[`serv${(page - 1) * 22 + 21}`] = req.body['form[FL43_Description21]'];
      FL43_Description[`serv${(page - 1) * 22 + 22}`] = req.body['form[FL43_Description22]'];
    }

    response.update(
      {
        FL43_Description: JSON.stringify(FL43_Description)
      }
    ).then(res => {
      console.log(res);
    })

    //FL_44 COLUMN
    if (page === 1) {
      FL44_HCPS_Rates[`rate${page}`] = req.body['form[FL44_HCPS_Rates1]'];
      FL44_HCPS_Rates[`rate${page + 1}`] = req.body['form[FL44_HCPS_Rates2]'];
      FL44_HCPS_Rates[`rate${page + 2}`] = req.body['form[FL44_HCPS_Rates3]'];
      FL44_HCPS_Rates[`rate${page + 3}`] = req.body['form[FL44_HCPS_Rates4]'];
      FL44_HCPS_Rates[`rate${page + 4}`] = req.body['form[FL44_HCPS_Rates5]'];
      FL44_HCPS_Rates[`rate${page + 5}`] = req.body['form[FL44_HCPS_Rates6]'];
      FL44_HCPS_Rates[`rate${page + 6}`] = req.body['form[FL44_HCPS_Rates7]'];
      FL44_HCPS_Rates[`rate${page + 7}`] = req.body['form[FL44_HCPS_Rates8]'];
      FL44_HCPS_Rates[`rate${page + 8}`] = req.body['form[FL44_HCPS_Rates9]'];
      FL44_HCPS_Rates[`rate${page + 9}`] = req.body['form[FL44_HCPS_Rates10]'];
      FL44_HCPS_Rates[`rate${page + 10}`] = req.body['form[FL44_HCPS_Rates11]'];
      FL44_HCPS_Rates[`rate${page + 11}`] = req.body['form[FL44_HCPS_Rates12]'];
      FL44_HCPS_Rates[`rate${page + 12}`] = req.body['form[FL44_HCPS_Rates13]'];
      FL44_HCPS_Rates[`rate${page + 13}`] = req.body['form[FL44_HCPS_Rates14]'];
      FL44_HCPS_Rates[`rate${page + 14}`] = req.body['form[FL44_HCPS_Rates15]'];
      FL44_HCPS_Rates[`rate${page + 15}`] = req.body['form[FL44_HCPS_Rates16]'];
      FL44_HCPS_Rates[`rate${page + 16}`] = req.body['form[FL44_HCPS_Rates17]'];
      FL44_HCPS_Rates[`rate${page + 17}`] = req.body['form[FL44_HCPS_Rates18]'];
      FL44_HCPS_Rates[`rate${page + 18}`] = req.body['form[FL44_HCPS_Rates19]'];
      FL44_HCPS_Rates[`rate${page + 19}`] = req.body['form[FL44_HCPS_Rates20]'];
      FL44_HCPS_Rates[`rate${page + 20}`] = req.body['form[FL44_HCPS_Rates21]'];
      FL44_HCPS_Rates[`rate${page + 21}`] = req.body['form[FL44_HCPS_Rates22]'];
    } else if (page > 1) {
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 1}`] = req.body['form[FL44_HCPS_Rates1]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 2}`] = req.body['form[FL44_HCPS_Rates2]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 3}`] = req.body['form[FL44_HCPS_Rates3]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 4}`] = req.body['form[FL44_HCPS_Rates4]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 5}`] = req.body['form[FL44_HCPS_Rates5]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 6}`] = req.body['form[FL44_HCPS_Rates6]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 7}`] = req.body['form[FL44_HCPS_Rates7]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 8}`] = req.body['form[FL44_HCPS_Rates8]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 9}`] = req.body['form[FL44_HCPS_Rates9]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 10}`] = req.body['form[FL44_HCPS_Rates10]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 11}`] = req.body['form[FL44_HCPS_Rates11]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 12}`] = req.body['form[FL44_HCPS_Rates12]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 13}`] = req.body['form[FL44_HCPS_Rates13]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 14}`] = req.body['form[FL44_HCPS_Rates14]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 15}`] = req.body['form[FL44_HCPS_Rates15]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 16}`] = req.body['form[FL44_HCPS_Rates16]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 17}`] = req.body['form[FL44_HCPS_Rates17]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 18}`] = req.body['form[FL44_HCPS_Rates18]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 19}`] = req.body['form[FL44_HCPS_Rates19]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 20}`] = req.body['form[FL44_HCPS_Rates20]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 21}`] = req.body['form[FL44_HCPS_Rates21]'];
      FL44_HCPS_Rates[`rate${(page - 1) * 22 + 22}`] = req.body['form[FL44_HCPS_Rates22]'];
    }

    response.update(
      {
        FL44_HCPS_Rates: JSON.stringify(FL44_HCPS_Rates)
      }
    ).then(res => {
      console.log(res);
    })

    //FL_45 COLUMN

    if (page === 1) {
      FL45_Service_Date[`date${page}`] = req.body['form[FL45_Service_Date1]'];
      FL45_Service_Date[`date${page + 1}`] = req.body['form[FL45_Service_Date2]'];
      FL45_Service_Date[`date${page + 2}`] = req.body['form[FL45_Service_Date3]'];
      FL45_Service_Date[`date${page + 3}`] = req.body['form[FL45_Service_Date4]'];
      FL45_Service_Date[`date${page + 4}`] = req.body['form[FL45_Service_Date5]'];
      FL45_Service_Date[`date${page + 5}`] = req.body['form[FL45_Service_Date6]'];
      FL45_Service_Date[`date${page + 6}`] = req.body['form[FL45_Service_Date7]'];
      FL45_Service_Date[`date${page + 7}`] = req.body['form[FL45_Service_Date8]'];
      FL45_Service_Date[`date${page + 8}`] = req.body['form[FL45_Service_Date9]'];
      FL45_Service_Date[`date${page + 9}`] = req.body['form[FL45_Service_Date10]'];
      FL45_Service_Date[`date${page + 10}`] = req.body['form[FL45_Service_Date11]'];
      FL45_Service_Date[`date${page + 11}`] = req.body['form[FL45_Service_Date12]'];
      FL45_Service_Date[`date${page + 12}`] = req.body['form[FL45_Service_Date13]'];
      FL45_Service_Date[`date${page + 13}`] = req.body['form[FL45_Service_Date14]'];
      FL45_Service_Date[`date${page + 14}`] = req.body['form[FL45_Service_Date15]'];
      FL45_Service_Date[`date${page + 15}`] = req.body['form[FL45_Service_Date16]'];
      FL45_Service_Date[`date${page + 16}`] = req.body['form[FL45_Service_Date17]'];
      FL45_Service_Date[`date${page + 17}`] = req.body['form[FL45_Service_Date18]'];
      FL45_Service_Date[`date${page + 18}`] = req.body['form[FL45_Service_Date19]'];
      FL45_Service_Date[`date${page + 19}`] = req.body['form[FL45_Service_Date20]'];
      FL45_Service_Date[`date${page + 20}`] = req.body['form[FL45_Service_Date21]'];
      FL45_Service_Date[`date${page + 21}`] = req.body['form[FL45_Service_Date22]'];
    } else if (page > 1) {
      FL45_Service_Date[`date${(page - 1) * 22 + 1}`] = req.body['form[FL45_Service_Date1]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 2}`] = req.body['form[FL45_Service_Date2]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 3}`] = req.body['form[FL45_Service_Date3]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 4}`] = req.body['form[FL45_Service_Date4]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 5}`] = req.body['form[FL45_Service_Date5]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 6}`] = req.body['form[FL45_Service_Date6]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 7}`] = req.body['form[FL45_Service_Date7]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 8}`] = req.body['form[FL45_Service_Date8]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 9}`] = req.body['form[FL45_Service_Date9]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 10}`] = req.body['form[FL45_Service_Date10]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 11}`] = req.body['form[FL45_Service_Date11]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 12}`] = req.body['form[FL45_Service_Date12]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 13}`] = req.body['form[FL45_Service_Date13]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 14}`] = req.body['form[FL45_Service_Date14]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 15}`] = req.body['form[FL45_Service_Date15]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 16}`] = req.body['form[FL45_Service_Date16]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 17}`] = req.body['form[FL45_Service_Date17]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 18}`] = req.body['form[FL45_Service_Date18]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 19}`] = req.body['form[FL45_Service_Date19]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 20}`] = req.body['form[FL45_Service_Date20]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 21}`] = req.body['form[FL45_Service_Date21]'];
      FL45_Service_Date[`date${(page - 1) * 22 + 22}`] = req.body['form[FL45_Service_Date22]'];
    }

    response.update(
      {
        FL45_Service_Date: JSON.stringify(FL45_Service_Date)
      }
    ).then(res => {
      console.log(res);
    })

    //FL_46 COLUMN

    if (page === 1) {
      FL46_Service_Units[`unit${page}`] = req.body['form[FL46_Service_Units1]'];
      FL46_Service_Units[`unit${page + 1}`] = req.body['form[FL46_Service_Units2]'];
      FL46_Service_Units[`unit${page + 2}`] = req.body['form[FL46_Service_Units3]'];
      FL46_Service_Units[`unit${page + 3}`] = req.body['form[FL46_Service_Units4]'];
      FL46_Service_Units[`unit${page + 4}`] = req.body['form[FL46_Service_Units5]'];
      FL46_Service_Units[`unit${page + 5}`] = req.body['form[FL46_Service_Units6]'];
      FL46_Service_Units[`unit${page + 6}`] = req.body['form[FL46_Service_Units7]'];
      FL46_Service_Units[`unit${page + 7}`] = req.body['form[FL46_Service_Units8]'];
      FL46_Service_Units[`unit${page + 8}`] = req.body['form[FL46_Service_Units9]'];
      FL46_Service_Units[`unit${page + 9}`] = req.body['form[FL46_Service_Units10]'];
      FL46_Service_Units[`unit${page + 10}`] = req.body['form[FL46_Service_Units11]'];
      FL46_Service_Units[`unit${page + 11}`] = req.body['form[FL46_Service_Units12]'];
      FL46_Service_Units[`unit${page + 12}`] = req.body['form[FL46_Service_Units13]'];
      FL46_Service_Units[`unit${page + 13}`] = req.body['form[FL46_Service_Units14]'];
      FL46_Service_Units[`unit${page + 14}`] = req.body['form[FL46_Service_Units15]'];
      FL46_Service_Units[`unit${page + 15}`] = req.body['form[FL46_Service_Units16]'];
      FL46_Service_Units[`unit${page + 16}`] = req.body['form[FL46_Service_Units17]'];
      FL46_Service_Units[`unit${page + 17}`] = req.body['form[FL46_Service_Units18]'];
      FL46_Service_Units[`unit${page + 18}`] = req.body['form[FL46_Service_Units19]'];
      FL46_Service_Units[`unit${page + 19}`] = req.body['form[FL46_Service_Units20]'];
      FL46_Service_Units[`unit${page + 20}`] = req.body['form[FL46_Service_Units21]'];
      FL46_Service_Units[`unit${page + 21}`] = req.body['form[FL46_Service_Units22]'];
    } else if (page > 1) {
      FL46_Service_Units[`unit${(page - 1) * 22 + 1}`] = req.body['form[FL46_Service_Units1]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 2}`] = req.body['form[FL46_Service_Units2]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 3}`] = req.body['form[FL46_Service_Units3]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 4}`] = req.body['form[FL46_Service_Units4]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 5}`] = req.body['form[FL46_Service_Units5]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 6}`] = req.body['form[FL46_Service_Units6]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 7}`] = req.body['form[FL46_Service_Units7]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 8}`] = req.body['form[FL46_Service_Units8]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 9}`] = req.body['form[FL46_Service_Units9]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 10}`] = req.body['form[FL46_Service_Units10]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 11}`] = req.body['form[FL46_Service_Units11]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 12}`] = req.body['form[FL46_Service_Units12]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 13}`] = req.body['form[FL46_Service_Units13]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 14}`] = req.body['form[FL46_Service_Units14]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 15}`] = req.body['form[FL46_Service_Units15]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 16}`] = req.body['form[FL46_Service_Units16]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 17}`] = req.body['form[FL46_Service_Units17]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 18}`] = req.body['form[FL46_Service_Units18]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 19}`] = req.body['form[FL46_Service_Units19]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 20}`] = req.body['form[FL46_Service_Units20]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 21}`] = req.body['form[FL46_Service_Units21]'];
      FL46_Service_Units[`unit${(page - 1) * 22 + 22}`] = req.body['form[FL46_Service_Units22]'];
    }

    response.update(
      {
        FL46_Service_Units: JSON.stringify(FL46_Service_Units)
      }
    ).then(res => {
      console.log(res);
    })

    //FL_47 COLUMN

    if (page === 1) {
      FL47_Total_Charges[`charge${page}`] = req.body['form[FL47_Total_Charges1]'];
      FL47_Total_Charges[`charge${page + 1}`] = req.body['form[FL47_Total_Charges2]'];
      FL47_Total_Charges[`charge${page + 2}`] = req.body['form[FL47_Total_Charges3]'];
      FL47_Total_Charges[`charge${page + 3}`] = req.body['form[FL47_Total_Charges4]'];
      FL47_Total_Charges[`charge${page + 4}`] = req.body['form[FL47_Total_Charges5]'];
      FL47_Total_Charges[`charge${page + 5}`] = req.body['form[FL47_Total_Charges6]'];
      FL47_Total_Charges[`charge${page + 6}`] = req.body['form[FL47_Total_Charges7]'];
      FL47_Total_Charges[`charge${page + 7}`] = req.body['form[FL47_Total_Charges8]'];
      FL47_Total_Charges[`charge${page + 8}`] = req.body['form[FL47_Total_Charges9]'];
      FL47_Total_Charges[`charge${page + 9}`] = req.body['form[FL47_Total_Charges10]'];
      FL47_Total_Charges[`charge${page + 10}`] = req.body['form[FL47_Total_Charges11]'];
      FL47_Total_Charges[`charge${page + 11}`] = req.body['form[FL47_Total_Charges12]'];
      FL47_Total_Charges[`charge${page + 12}`] = req.body['form[FL47_Total_Charges13]'];
      FL47_Total_Charges[`charge${page + 13}`] = req.body['form[FL47_Total_Charges14]'];
      FL47_Total_Charges[`charge${page + 14}`] = req.body['form[FL47_Total_Charges15]'];
      FL47_Total_Charges[`charge${page + 15}`] = req.body['form[FL47_Total_Charges16]'];
      FL47_Total_Charges[`charge${page + 16}`] = req.body['form[FL47_Total_Charges17]'];
      FL47_Total_Charges[`charge${page + 17}`] = req.body['form[FL47_Total_Charges18]'];
      FL47_Total_Charges[`charge${page + 18}`] = req.body['form[FL47_Total_Charges19]'];
      FL47_Total_Charges[`charge${page + 19}`] = req.body['form[FL47_Total_Charges20]'];
      FL47_Total_Charges[`charge${page + 20}`] = req.body['form[FL47_Total_Charges21]'];
      FL47_Total_Charges[`charge${page + 21}`] = req.body['form[FL47_Total_Charges22]'];
    } else if (page > 1) {
      FL47_Total_Charges[`charge${(page - 1) * 22 + 1}`] = req.body['form[FL47_Total_Charges1]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 2}`] = req.body['form[FL47_Total_Charges2]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 3}`] = req.body['form[FL47_Total_Charges3]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 4}`] = req.body['form[FL47_Total_Charges4]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 5}`] = req.body['form[FL47_Total_Charges5]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 6}`] = req.body['form[FL47_Total_Charges6]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 7}`] = req.body['form[FL47_Total_Charges7]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 8}`] = req.body['form[FL47_Total_Charges8]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 9}`] = req.body['form[FL47_Total_Charges9]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 10}`] = req.body['form[FL47_Total_Charges10]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 11}`] = req.body['form[FL47_Total_Charges11]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 12}`] = req.body['form[FL47_Total_Charges12]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 13}`] = req.body['form[FL47_Total_Charges13]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 14}`] = req.body['form[FL47_Total_Charges14]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 15}`] = req.body['form[FL47_Total_Charges15]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 16}`] = req.body['form[FL47_Total_Charges16]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 17}`] = req.body['form[FL47_Total_Charges17]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 18}`] = req.body['form[FL47_Total_Charges18]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 19}`] = req.body['form[FL47_Total_Charges19]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 20}`] = req.body['form[FL47_Total_Charges20]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 21}`] = req.body['form[FL47_Total_Charges21]'];
      FL47_Total_Charges[`charge${(page - 1) * 22 + 22}`] = req.body['form[FL47_Total_Charges22]'];
    }

    response.update(
      {
        FL47_Total_Charges: JSON.stringify(FL47_Total_Charges)
      }
    ).then(res => {
      console.log(res);
    })

    //FL_48 COLUMN

    if (page === 1) {
      FL48_Noncovered_Charges[`nonCov${page}`] = req.body['form[FL48_Noncovered_Charges1]'];
      FL48_Noncovered_Charges[`nonCov${page + 1}`] = req.body['form[FL48_Noncovered_Charges2]'];
      FL48_Noncovered_Charges[`nonCov${page + 2}`] = req.body['form[FL48_Noncovered_Charges3]'];
      FL48_Noncovered_Charges[`nonCov${page + 3}`] = req.body['form[FL48_Noncovered_Charges4]'];
      FL48_Noncovered_Charges[`nonCov${page + 4}`] = req.body['form[FL48_Noncovered_Charges5]'];
      FL48_Noncovered_Charges[`nonCov${page + 5}`] = req.body['form[FL48_Noncovered_Charges6]'];
      FL48_Noncovered_Charges[`nonCov${page + 6}`] = req.body['form[FL48_Noncovered_Charges7]'];
      FL48_Noncovered_Charges[`nonCov${page + 7}`] = req.body['form[FL48_Noncovered_Charges8]'];
      FL48_Noncovered_Charges[`nonCov${page + 8}`] = req.body['form[FL48_Noncovered_Charges9]'];
      FL48_Noncovered_Charges[`nonCov${page + 9}`] = req.body['form[FL48_Noncovered_Charges10]'];
      FL48_Noncovered_Charges[`nonCov${page + 10}`] = req.body['form[FL48_Noncovered_Charges11]'];
      FL48_Noncovered_Charges[`nonCov${page + 11}`] = req.body['form[FL48_Noncovered_Charges12]'];
      FL48_Noncovered_Charges[`nonCov${page + 12}`] = req.body['form[FL48_Noncovered_Charges13]'];
      FL48_Noncovered_Charges[`nonCov${page + 13}`] = req.body['form[FL48_Noncovered_Charges14]'];
      FL48_Noncovered_Charges[`nonCov${page + 14}`] = req.body['form[FL48_Noncovered_Charges15]'];
      FL48_Noncovered_Charges[`nonCov${page + 15}`] = req.body['form[FL48_Noncovered_Charges16]'];
      FL48_Noncovered_Charges[`nonCov${page + 16}`] = req.body['form[FL48_Noncovered_Charges17]'];
      FL48_Noncovered_Charges[`nonCov${page + 17}`] = req.body['form[FL48_Noncovered_Charges18]'];
      FL48_Noncovered_Charges[`nonCov${page + 18}`] = req.body['form[FL48_Noncovered_Charges19]'];
      FL48_Noncovered_Charges[`nonCov${page + 19}`] = req.body['form[FL48_Noncovered_Charges20]'];
      FL48_Noncovered_Charges[`nonCov${page + 20}`] = req.body['form[FL48_Noncovered_Charges21]'];
      FL48_Noncovered_Charges[`nonCov${page + 21}`] = req.body['form[FL48_Noncovered_Charges22]'];
    } else if (page > 1) {
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 1}`] = req.body['form[FL48_Noncovered_Charges1]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 2}`] = req.body['form[FL48_Noncovered_Charges2]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 3}`] = req.body['form[FL48_Noncovered_Charges3]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 4}`] = req.body['form[FL48_Noncovered_Charges4]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 5}`] = req.body['form[FL48_Noncovered_Charges5]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 6}`] = req.body['form[FL48_Noncovered_Charges6]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 7}`] = req.body['form[FL48_Noncovered_Charges7]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 8}`] = req.body['form[FL48_Noncovered_Charges8]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 9}`] = req.body['form[FL48_Noncovered_Charges9]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 10}`] = req.body['form[FL48_Noncovered_Charges10]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 11}`] = req.body['form[FL48_Noncovered_Charges11]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 12}`] = req.body['form[FL48_Noncovered_Charges12]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 13}`] = req.body['form[FL48_Noncovered_Charges13]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 14}`] = req.body['form[FL48_Noncovered_Charges14]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 15}`] = req.body['form[FL48_Noncovered_Charges15]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 16}`] = req.body['form[FL48_Noncovered_Charges16]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 17}`] = req.body['form[FL48_Noncovered_Charges17]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 18}`] = req.body['form[FL48_Noncovered_Charges18]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 19}`] = req.body['form[FL48_Noncovered_Charges19]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 20}`] = req.body['form[FL48_Noncovered_Charges20]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 21}`] = req.body['form[FL48_Noncovered_Charges21]'];
      FL48_Noncovered_Charges[`nonCov${(page - 1) * 22 + 22}`] = req.body['form[FL48_Noncovered_Charges22]'];
    }

    response.update(
      {
        FL48_Noncovered_Charges: JSON.stringify(FL48_Noncovered_Charges)
      }
    ).then(res => {
      console.log(res);
    })

    //FL_49

    if (page === 1) {
      FL49[`nubc${page}`] = req.body['form[FL49_1]'];
      FL49[`nubc${page + 1}`] = req.body['form[FL49_2]'];
      FL49[`nubc${page + 2}`] = req.body['form[FL49_3]'];
      FL49[`nubc${page + 3}`] = req.body['form[FL49_4]'];
      FL49[`nubc${page + 4}`] = req.body['form[FL49_5]'];
      FL49[`nubc${page + 5}`] = req.body['form[FL49_6]'];
      FL49[`nubc${page + 6}`] = req.body['form[FL49_7]'];
      FL49[`nubc${page + 7}`] = req.body['form[FL49_8]'];
      FL49[`nubc${page + 8}`] = req.body['form[FL49_9]'];
      FL49[`nubc${page + 9}`] = req.body['form[FL49_10]'];
      FL49[`nubc${page + 10}`] = req.body['form[FL49_11]'];
      FL49[`nubc${page + 11}`] = req.body['form[FL49_12]'];
      FL49[`nubc${page + 12}`] = req.body['form[FL49_13]'];
      FL49[`nubc${page + 13}`] = req.body['form[FL49_14]'];
      FL49[`nubc${page + 14}`] = req.body['form[FL49_15]'];
      FL49[`nubc${page + 15}`] = req.body['form[FL49_16]'];
      FL49[`nubc${page + 16}`] = req.body['form[FL49_17]'];
      FL49[`nubc${page + 17}`] = req.body['form[FL49_18]'];
      FL49[`nubc${page + 18}`] = req.body['form[FL49_19]'];
      FL49[`nubc${page + 19}`] = req.body['form[FL49_20]'];
      FL49[`nubc${page + 20}`] = req.body['form[FL49_21]'];
      FL49[`nubc${page + 21}`] = req.body['form[FL49_22]'];
    } else if (page > 1) {
      FL49[`nubc${(page - 1) * 22 + 1}`] = req.body['form[FL49_1]'];
      FL49[`nubc${(page - 1) * 22 + 2}`] = req.body['form[FL49_2]'];
      FL49[`nubc${(page - 1) * 22 + 3}`] = req.body['form[FL49_3]'];
      FL49[`nubc${(page - 1) * 22 + 4}`] = req.body['form[FL49_4]'];
      FL49[`nubc${(page - 1) * 22 + 5}`] = req.body['form[FL49_5]'];
      FL49[`nubc${(page - 1) * 22 + 6}`] = req.body['form[FL49_6]'];
      FL49[`nubc${(page - 1) * 22 + 7}`] = req.body['form[FL49_7]'];
      FL49[`nubc${(page - 1) * 22 + 8}`] = req.body['form[FL49_8]'];
      FL49[`nubc${(page - 1) * 22 + 9}`] = req.body['form[FL49_9]'];
      FL49[`nubc${(page - 1) * 22 + 10}`] = req.body['form[FL49_10]'];
      FL49[`nubc${(page - 1) * 22 + 11}`] = req.body['form[FL49_11]'];
      FL49[`nubc${(page - 1) * 22 + 12}`] = req.body['form[FL49_12]'];
      FL49[`nubc${(page - 1) * 22 + 13}`] = req.body['form[FL49_13]'];
      FL49[`nubc${(page - 1) * 22 + 14}`] = req.body['form[FL49_14]'];
      FL49[`nubc${(page - 1) * 22 + 15}`] = req.body['form[FL49_15]'];
      FL49[`nubc${(page - 1) * 22 + 16}`] = req.body['form[FL49_16]'];
      FL49[`nubc${(page - 1) * 22 + 17}`] = req.body['form[FL49_17]'];
      FL49[`nubc${(page - 1) * 22 + 18}`] = req.body['form[FL49_18]'];
      FL49[`nubc${(page - 1) * 22 + 19}`] = req.body['form[FL49_19]'];
      FL49[`nubc${(page - 1) * 22 + 20}`] = req.body['form[FL49_20]'];
      FL49[`nubc${(page - 1) * 22 + 21}`] = req.body['form[FL49_21]'];
      FL49[`nubc${(page - 1) * 22 + 22}`] = req.body['form[FL49_22]'];
    }

    response.update(
      {
        FL49: JSON.stringify(FL49)
      }
    ).then(res => {
      console.log(res);
    })

    res.render("ub04form", {
      layouts: "main",
      response

    })
  }).catch(err => console.log(err));

}