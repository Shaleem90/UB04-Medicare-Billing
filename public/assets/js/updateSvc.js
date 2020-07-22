
$(function () {

  $(".update").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
 
    //save the pageNumber of the page we need to modify on services_controller
    let pageNumber = 0;
    //Create the object form with the input values to send to controllers
    let form = {};
    //Loop through the posible number of pages
    for (var i = 1; i <= 46; i++) {
      //if the button we click hasclass X (x refers to the pageNumber) value true, we store that number on the variable pageNumber
      if ((($(this).parentsUntil('.47').hasClass(`${i}`)))) {
        pageNumber += i
        //Store the input value from the specific page we are at
        form = {
          FL42_Revenue_Code1: $(`#${i} #box_42_1`).val(),
          FL42_Revenue_Code2: $(`#${i} #box_42_2`).val(),
          FL42_Revenue_Code3: $(`#${i} #box_42_3`).val(),
          FL42_Revenue_Code4: $(`#${i} #box_42_4`).val(),
          FL42_Revenue_Code5: $(`#${i} #box_42_5`).val(),
          FL42_Revenue_Code6: $(`#${i} #box_42_6`).val(),
          FL42_Revenue_Code7: $(`#${i} #box_42_7`).val(),
          FL42_Revenue_Code8: $(`#${i} #box_42_8`).val(),
          FL42_Revenue_Code9: $(`#${i} #box_42_9`).val(),
          FL42_Revenue_Code10: $(`#${i} #box_42_10`).val(),
          FL42_Revenue_Code11: $(`#${i} #box_42_11`).val(),
          FL42_Revenue_Code12: $(`#${i} #box_42_12`).val(),
          FL42_Revenue_Code13: $(`#${i} #box_42_13`).val(),
          FL42_Revenue_Code14: $(`#${i} #box_42_14`).val(),
          FL42_Revenue_Code15: $(`#${i} #box_42_15`).val(),
          FL42_Revenue_Code16: $(`#${i} #box_42_16`).val(),
          FL42_Revenue_Code17: $(`#${i} #box_42_17`).val(),
          FL42_Revenue_Code18: $(`#${i} #box_42_18`).val(),
          FL42_Revenue_Code19: $(`#${i} #box_42_19`).val(),
          FL42_Revenue_Code20: $(`#${i} #box_42_20`).val(),
          FL42_Revenue_Code21: $(`#${i} #box_42_21`).val(),
          FL42_Revenue_Code22: $(`#${i} #box_42_22`).val(),
            // Description of service
          FL43_Description1: $(`#${i} #box_43_1`).val(),
          FL43_Description2: $(`#${i} #box_43_2`).val(),
          FL43_Description3: $(`#${i} #box_43_3`).val(),
          FL43_Description4: $(`#${i} #box_43_4`).val(),
          FL43_Description5: $(`#${i} #box_43_5`).val(),
          FL43_Description6: $(`#${i} #box_43_6`).val(),
          FL43_Description7: $(`#${i} #box_43_7`).val(),
          FL43_Description8: $(`#${i} #box_43_8`).val(),
          FL43_Description9: $(`#${i} #box_43_9`).val(),
          FL43_Description10: $(`#${i} #box_43_10`).val(),
          FL43_Description11: $(`#${i} #box_43_11`).val(),
          FL43_Description12: $(`#${i} #box_43_12`).val(),
          FL43_Description13: $(`#${i} #box_43_13`).val(),
          FL43_Description14: $(`#${i} #box_43_14`).val(),
          FL43_Description15: $(`#${i} #box_43_15`).val(),
          FL43_Description16: $(`#${i} #box_43_16`).val(),
          FL43_Description17: $(`#${i} #box_43_17`).val(),
          FL43_Description18: $(`#${i} #box_43_18`).val(),
          FL43_Description19: $(`#${i} #box_43_19`).val(),
          FL43_Description20: $(`#${i} #box_43_20`).val(),
          FL43_Description21: $(`#${i} #box_43_21`).val(),
          FL43_Description22: $(`#${i} #box_43_22`).val(),

            // Rates of services
          FL44_HCPS_Rates1: $(`#${i} #box_44_1`).val(),
          FL44_HCPS_Rates2: $(`#${i} #box_44_2`).val(),
          FL44_HCPS_Rates3: $(`#${i} #box_44_3`).val(),
          FL44_HCPS_Rates4: $(`#${i} #box_44_4`).val(),
          FL44_HCPS_Rates5: $(`#${i} #box_44_5`).val(),
          FL44_HCPS_Rates6: $(`#${i} #box_44_6`).val(),
          FL44_HCPS_Rates7: $(`#${i} #box_44_7`).val(),
          FL44_HCPS_Rates8: $(`#${i} #box_44_8`).val(),
          FL44_HCPS_Rates9: $(`#${i} #box_44_9`).val(),
          FL44_HCPS_Rates10: $(`#${i} #box_44_10`).val(),
          FL44_HCPS_Rates11: $(`#${i} #box_44_11`).val(),
          FL44_HCPS_Rates12: $(`#${i} #box_44_12`).val(),
          FL44_HCPS_Rates13: $(`#${i} #box_44_13`).val(),
          FL44_HCPS_Rates14: $(`#${i} #box_44_14`).val(),
          FL44_HCPS_Rates15: $(`#${i} #box_44_15`).val(),
          FL44_HCPS_Rates16: $(`#${i} #box_44_16`).val(),
          FL44_HCPS_Rates17: $(`#${i} #box_44_17`).val(),
          FL44_HCPS_Rates18: $(`#${i} #box_44_18`).val(),
          FL44_HCPS_Rates19: $(`#${i} #box_44_19`).val(),
          FL44_HCPS_Rates20: $(`#${i} #box_44_20`).val(),
          FL44_HCPS_Rates21: $(`#${i} #box_44_21`).val(),
          FL44_HCPS_Rates22: $(`#${i} #box_44_22`).val(),

          // Dates of service 
          FL45_Service_Date1: $(`#${i} #box_45_1`).val(),
          FL45_Service_Date2: $(`#${i} #box_45_2`).val(),
          FL45_Service_Date3: $(`#${i} #box_45_3`).val(),
          FL45_Service_Date4: $(`#${i} #box_45_4`).val(),
          FL45_Service_Date5: $(`#${i} #box_45_5`).val(),
          FL45_Service_Date6: $(`#${i} #box_45_6`).val(),
          FL45_Service_Date7: $(`#${i} #box_45_7`).val(),
          FL45_Service_Date8: $(`#${i} #box_45_8`).val(),
          FL45_Service_Date9: $(`#${i} #box_45_9`).val(),
          FL45_Service_Date10: $(`#${i} #box_45_10`).val(),
          FL45_Service_Date11: $(`#${i} #box_45_11`).val(),
          FL45_Service_Date12: $(`#${i} #box_45_12`).val(),
          FL45_Service_Date13: $(`#${i} #box_45_13`).val(),
          FL45_Service_Date14: $(`#${i} #box_45_14`).val(),
          FL45_Service_Date15: $(`#${i} #box_45_15`).val(),
          FL45_Service_Date16: $(`#${i} #box_45_16`).val(),
          FL45_Service_Date17: $(`#${i} #box_45_17`).val(),
          FL45_Service_Date18: $(`#${i} #box_45_18`).val(),
          FL45_Service_Date19: $(`#${i} #box_45_19`).val(),
          FL45_Service_Date20: $(`#${i} #box_45_20`).val(),
          FL45_Service_Date21: $(`#${i} #box_45_21`).val(),
          FL45_Service_Date22: $(`#${i} #box_45_22`).val(),

          // Service Unit Numbers
          FL46_Service_Units1: $(`#${i} #box_46_1`).val(),
          FL46_Service_Units2: $(`#${i} #box_46_2`).val(),
          FL46_Service_Units3: $(`#${i} #box_46_3`).val(),
          FL46_Service_Units4: $(`#${i} #box_46_4`).val(),
          FL46_Service_Units5: $(`#${i} #box_46_5`).val(),
          FL46_Service_Units6: $(`#${i} #box_46_6`).val(),
          FL46_Service_Units7: $(`#${i} #box_46_7`).val(),
          FL46_Service_Units8: $(`#${i} #box_46_8`).val(),
          FL46_Service_Units9: $(`#${i} #box_46_9`).val(),
          FL46_Service_Units10: $(`#${i} #box_46_10`).val(),
          FL46_Service_Units11: $(`#${i} #box_46_11`).val(),
          FL46_Service_Units12: $(`#${i} #box_46_12`).val(),
          FL46_Service_Units13: $(`#${i} #box_46_13`).val(),
          FL46_Service_Units14: $(`#${i} #box_46_14`).val(),
          FL46_Service_Units15: $(`#${i} #box_46_15`).val(),
          FL46_Service_Units16: $(`#${i} #box_46_16`).val(),
          FL46_Service_Units17: $(`#${i} #box_46_17`).val(),
          FL46_Service_Units18: $(`#${i} #box_46_18`).val(),
          FL46_Service_Units19: $(`#${i} #box_46_19`).val(),
          FL46_Service_Units20: $(`#${i} #box_46_20`).val(),
          FL46_Service_Units21: $(`#${i} #box_46_21`).val(),
          FL46_Service_Units22: $(`#${i} #box_46_22`).val(),

          // Total Service Charges
          FL47_Total_Charges1: $(`#${i} #box_47_1`).val(),
          FL47_Total_Charges2: $(`#${i} #box_47_2`).val(),
          FL47_Total_Charges3: $(`#${i} #box_47_3`).val(),
          FL47_Total_Charges4: $(`#${i} #box_47_4`).val(),
          FL47_Total_Charges5: $(`#${i} #box_47_5`).val(),
          FL47_Total_Charges6: $(`#${i} #box_47_6`).val(),
          FL47_Total_Charges7: $(`#${i} #box_47_7`).val(),
          FL47_Total_Charges8: $(`#${i} #box_47_8`).val(),
          FL47_Total_Charges9: $(`#${i} #box_47_9`).val(),
          FL47_Total_Charges10: $(`#${i} #box_47_10`).val(),
          FL47_Total_Charges11: $(`#${i} #box_47_11`).val(),
          FL47_Total_Charges12: $(`#${i} #box_47_12`).val(),
          FL47_Total_Charges13: $(`#${i} #box_47_13`).val(),
          FL47_Total_Charges14: $(`#${i} #box_47_14`).val(),
          FL47_Total_Charges15: $(`#${i} #box_47_15`).val(),
          FL47_Total_Charges16: $(`#${i} #box_47_16`).val(),
          FL47_Total_Charges17: $(`#${i} #box_47_17`).val(),
          FL47_Total_Charges18: $(`#${i} #box_47_18`).val(),
          FL47_Total_Charges19: $(`#${i} #box_47_19`).val(),
          FL47_Total_Charges20: $(`#${i} #box_47_20`).val(),
          FL47_Total_Charges21: $(`#${i} #box_47_21`).val(),
          FL47_Total_Charges22: $(`#${i} #box_47_22`).val(),

          // All Non-Covered Charges
          FL48_Noncovered_Charges1: $(`#${i} #box_48_1`).val(),
          FL48_Noncovered_Charges2: $(`#${i} #box_48_2`).val(),
          FL48_Noncovered_Charges3: $(`#${i} #box_48_3`).val(),
          FL48_Noncovered_Charges4: $(`#${i} #box_48_4`).val(),
          FL48_Noncovered_Charges5: $(`#${i} #box_48_5`).val(),
          FL48_Noncovered_Charges6: $(`#${i} #box_48_6`).val(),
          FL48_Noncovered_Charges7: $(`#${i} #box_48_7`).val(),
          FL48_Noncovered_Charges8: $(`#${i} #box_48_8`).val(),
          FL48_Noncovered_Charges9: $(`#${i} #box_48_9`).val(),
          FL48_Noncovered_Charges10: $(`#${i} #box_48_10`).val(),
          FL48_Noncovered_Charges11: $(`#${i} #box_48_11`).val(),
          FL48_Noncovered_Charges12: $(`#${i} #box_48_12`).val(),
          FL48_Noncovered_Charges13: $(`#${i} #box_48_13`).val(),
          FL48_Noncovered_Charges14: $(`#${i} #box_48_14`).val(),
          FL48_Noncovered_Charges15: $(`#${i} #box_48_15`).val(),
          FL48_Noncovered_Charges16: $(`#${i} #box_48_16`).val(),
          FL48_Noncovered_Charges17: $(`#${i} #box_48_17`).val(),
          FL48_Noncovered_Charges18: $(`#${i} #box_48_18`).val(),
          FL48_Noncovered_Charges19: $(`#${i} #box_48_19`).val(),
          FL48_Noncovered_Charges20: $(`#${i} #box_48_20`).val(),
          FL48_Noncovered_Charges21: $(`#${i} #box_48_21`).val(),
          FL48_Noncovered_Charges22: $(`#${i} #box_48_22`).val(),

          // Whatever goes in box 49
          FL49_1: $(`#${i} #box_49_1`).val(),
          FL49_2: $(`#${i} #box_49_2`).val(),
          FL49_3: $(`#${i} #box_49_3`).val(),
          FL49_4: $(`#${i} #box_49_4`).val(),
          FL49_5: $(`#${i} #box_49_5`).val(),
          FL49_6: $(`#${i} #box_49_6`).val(),
          FL49_7: $(`#${i} #box_49_7`).val(),
          FL49_8: $(`#${i} #box_49_8`).val(),
          FL49_9: $(`#${i} #box_49_9`).val(),
          FL49_10: $(`#${i} #box_49_10`).val(),
          FL49_11: $(`#${i} #box_49_11`).val(),
          FL49_12: $(`#${i} #box_49_12`).val(),
          FL49_13: $(`#${i} #box_49_13`).val(),
          FL49_14: $(`#${i} #box_49_14`).val(),
          FL49_15: $(`#${i} #box_49_15`).val(),
          FL49_16: $(`#${i} #box_49_16`).val(),
          FL49_17: $(`#${i} #box_49_17`).val(),
          FL49_18: $(`#${i} #box_49_18`).val(),
          FL49_19: $(`#${i} #box_49_19`).val(),
          FL49_20: $(`#${i} #box_49_20`).val(),
          FL49_21: $(`#${i} #box_49_21`).val(),
          FL49_22: $(`#${i} #box_49_22`).val(),
          
        }
      }
    }

    /// END TRIAL
    updatePost(form, id, pageNumber)
  });
  // window.location.reload();
  function updatePost(form, id, pageNumber) {
    $.ajax({
      method: "PUT",
      url: "ub04services/" + id,
      data: {form, page: pageNumber}
    })
      .then(function () {
        alert("Patient Info Updated")
        res.send({ redirect: "/ub04form/" + id });

      });
  }
});


