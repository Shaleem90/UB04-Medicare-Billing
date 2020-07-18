
$(function () {

  $(".update").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    console.log(id);

    console.log($("#box_42_1").val())
    const form = {
      // Revenue codes
      FL42_Revenue_Code1: $("#box_42_1").attr("name", null).val(),
      FL42_Revenue_Code2: $("#box_42_2").val(),
      FL42_Revenue_Code3: $("#box_42_3").val(),
      FL42_Revenue_Code4: $("#box_42_4").val(),
      FL42_Revenue_Code5: $("#box_42_5").val(),
      FL42_Revenue_Code6: $("#box_42_6").val(),
      FL42_Revenue_Code7: $("#box_42_7").val(),
      FL42_Revenue_Code8: $("#box_42_8").val(),
      FL42_Revenue_Code9: $("#box_42_9").val(),
      FL42_Revenue_Code10: $("#box_42_10").val(),
      FL42_Revenue_Code11: $("#box_42_11").val(),
      FL42_Revenue_Code12: $("#box_42_12").val(),
      FL42_Revenue_Code13: $("#box_42_13").val(),
      FL42_Revenue_Code14: $("#box_42_14").val(),
      FL42_Revenue_Code15: $("#box_42_15").val(),
      FL42_Revenue_Code16: $("#box_42_16").val(),
      FL42_Revenue_Code17: $("#box_42_17").val(),
      FL42_Revenue_Code18: $("#box_42_18").val(),
      FL42_Revenue_Code19: $("#box_42_19").val(),
      FL42_Revenue_Code20: $("#box_42_20").val(),
      FL42_Revenue_Code21: $("#box_42_21").val(),
      FL42_Revenue_Code22: $("#box_42_22").val(),

      // Description of service
      FL43_Description1: $("box_43_1").val(),
      FL43_Description2: $("box_43_2").val(),
      FL43_Description3: $("box_43_3").val(),
      FL43_Description4: $("box_43_4").val(),
      FL43_Description5: $("box_43_5").val(),
      FL43_Description6: $("box_43_6").val(),
      FL43_Description7: $("box_43_7").val(),
      FL43_Description8: $("box_43_8").val(),
      FL43_Description9: $("box_43_9").val(),
      FL43_Description10: $("box_43_10").val(),
      FL43_Description11: $("box_43_11").val(),
      FL43_Description12: $("box_43_12").val(),
      FL43_Description13: $("box_43_13").val(),
      FL43_Description14: $("box_43_14").val(),
      FL43_Description15: $("box_43_15").val(),
      FL43_Description16: $("box_43_16").val(),
      FL43_Description17: $("box_43_17").val(),
      FL43_Description18: $("box_43_18").val(),
      FL43_Description19: $("box_43_19").val(),
      FL43_Description20: $("box_43_20").val(),
      FL43_Description21: $("box_43_21").val(),
      FL43_Description22: $("box_43_22").val(),



      // Rates of services
      FL44_HCPS_Rates1: $("#box_44_1").val(),
      FL44_HCPS_Rates2: $("#box_44_2").val(),
      FL44_HCPS_Rates3: $("#box_44_3").val(),
      FL44_HCPS_Rates4: $("#box_44_4").val(),
      FL44_HCPS_Rates5: $("#box_44_5").val(),
      FL44_HCPS_Rates6: $("#box_44_6").val(),
      FL44_HCPS_Rates7: $("#box_44_7").val(),
      FL44_HCPS_Rates8: $("#box_44_8").val(),
      FL44_HCPS_Rates9: $("#box_44_9").val(),
      FL44_HCPS_Rates10: $("#box_44_10").val(),
      FL44_HCPS_Rates11: $("#box_44_11").val(),
      FL44_HCPS_Rates12: $("#box_44_12").val(),
      FL44_HCPS_Rates13: $("#box_44_13").val(),
      FL44_HCPS_Rates14: $("#box_44_14").val(),
      FL44_HCPS_Rates15: $("#box_44_15").val(),
      FL44_HCPS_Rates16: $("#box_44_16").val(),
      FL44_HCPS_Rates17: $("#box_44_17").val(),
      FL44_HCPS_Rates18: $("#box_44_18").val(),
      FL44_HCPS_Rates19: $("#box_44_19").val(),
      FL44_HCPS_Rates20: $("#box_44_20").val(),
      FL44_HCPS_Rates21: $("#box_44_21").val(),
      FL44_HCPS_Rates22: $("#box_44_22").val(),


      // Dates of service 
      FL45_Service_Date1: $("#box_45_1").val(),
      FL45_Service_Date2: $("#box_45_2").val(),
      FL45_Service_Date3: $("#box_45_3").val(),
      FL45_Service_Date4: $("#box_45_4").val(),
      FL45_Service_Date5: $("#box_45_5").val(),
      FL45_Service_Date6: $("#box_45_6").val(),
      FL45_Service_Date7: $("#box_45_7").val(),
      FL45_Service_Date8: $("#box_45_8").val(),
      FL45_Service_Date9: $("#box_45_9").val(),
      FL45_Service_Date10: $("#box_45_10").val(),
      FL45_Service_Date11: $("#box_45_11").val(),
      FL45_Service_Date12: $("#box_45_12").val(),
      FL45_Service_Date13: $("#box_45_13").val(),
      FL45_Service_Date14: $("#box_45_14").val(),
      FL45_Service_Date15: $("#box_45_15").val(),
      FL45_Service_Date16: $("#box_45_16").val(),
      FL45_Service_Date17: $("#box_45_17").val(),
      FL45_Service_Date18: $("#box_45_18").val(),
      FL45_Service_Date19: $("#box_45_19").val(),
      FL45_Service_Date20: $("#box_45_20").val(),
      FL45_Service_Date21: $("#box_45_21").val(),
      FL45_Service_Date22: $("#box_45_22").val(),



      // Service Unit Numbers
      FL46_Service_Units1: $("#box_46_1").val(),
      FL46_Service_Units2: $("#box_46_2").val(),
      FL46_Service_Units3: $("#box_46_3").val(),
      FL46_Service_Units4: $("#box_46_4").val(),
      FL46_Service_Units5: $("#box_46_5").val(),
      FL46_Service_Units6: $("#box_46_6").val(),
      FL46_Service_Units7: $("#box_46_7").val(),
      FL46_Service_Units8: $("#box_46_8").val(),
      FL46_Service_Units9: $("#box_46_9").val(),
      FL46_Service_Units10: $("#box_46_10").val(),
      FL46_Service_Units11: $("#box_46_11").val(),
      FL46_Service_Units12: $("#box_46_12").val(),
      FL46_Service_Units13: $("#box_46_13").val(),
      FL46_Service_Units14: $("#box_46_14").val(),
      FL46_Service_Units15: $("#box_46_15").val(),
      FL46_Service_Units16: $("#box_46_16").val(),
      FL46_Service_Units17: $("#box_46_17").val(),
      FL46_Service_Units18: $("#box_46_18").val(),
      FL46_Service_Units19: $("#box_46_19").val(),
      FL46_Service_Units20: $("#box_46_20").val(),
      FL46_Service_Units21: $("#box_46_21").val(),
      FL46_Service_Units22: $("#box_46_22").val(),



      // Total Service Charges
      FL47_Total_Charges1: $("#box_47_1").val(),
      FL47_Total_Charges2: $("#box_47_2").val(),
      FL47_Total_Charges3: $("#box_47_3").val(),
      FL47_Total_Charges4: $("#box_47_4").val(),
      FL47_Total_Charges5: $("#box_47_5").val(),
      FL47_Total_Charges6: $("#box_47_6").val(),
      FL47_Total_Charges7: $("#box_47_7").val(),
      FL47_Total_Charges8: $("#box_47_8").val(),
      FL47_Total_Charges9: $("#box_47_9").val(),
      FL47_Total_Charges10: $("#box_47_10").val(),
      FL47_Total_Charges11: $("#box_47_11").val(),
      FL47_Total_Charges12: $("#box_47_12").val(),
      FL47_Total_Charges13: $("#box_47_13").val(),
      FL47_Total_Charges14: $("#box_47_14").val(),
      FL47_Total_Charges15: $("#box_47_15").val(),
      FL47_Total_Charges16: $("#box_47_16").val(),
      FL47_Total_Charges17: $("#box_47_17").val(),
      FL47_Total_Charges18: $("#box_47_18").val(),
      FL47_Total_Charges19: $("#box_47_19").val(),
      FL47_Total_Charges20: $("#box_47_20").val(),
      FL47_Total_Charges21: $("#box_47_21").val(),
      FL47_Total_Charges22: $("#box_47_22").val(),




      // All Non-Covered Charges
      FL48_Noncovered_Charges1: $("#box_48_1").val(),
      FL48_Noncovered_Charges2: $("#box_48_2").val(),
      FL48_Noncovered_Charges3: $("#box_48_3").val(),
      FL48_Noncovered_Charges4: $("#box_48_4").val(),
      FL48_Noncovered_Charges5: $("#box_48_5").val(),
      FL48_Noncovered_Charges6: $("#box_48_6").val(),
      FL48_Noncovered_Charges7: $("#box_48_7").val(),
      FL48_Noncovered_Charges8: $("#box_48_8").val(),
      FL48_Noncovered_Charges9: $("#box_48_9").val(),
      FL48_Noncovered_Charges10: $("#box_48_10").val(),
      FL48_Noncovered_Charges11: $("#box_48_11").val(),
      FL48_Noncovered_Charges12: $("#box_48_12").val(),
      FL48_Noncovered_Charges13: $("#box_48_13").val(),
      FL48_Noncovered_Charges14: $("#box_48_14").val(),
      FL48_Noncovered_Charges15: $("#box_48_15").val(),
      FL48_Noncovered_Charges16: $("#box_48_16").val(),
      FL48_Noncovered_Charges17: $("#box_48_17").val(),
      FL48_Noncovered_Charges18: $("#box_48_18").val(),
      FL48_Noncovered_Charges19: $("#box_48_19").val(),
      FL48_Noncovered_Charges20: $("#box_48_20").val(),
      FL48_Noncovered_Charges21: $("#box_48_21").val(),
      FL48_Noncovered_Charges22: $("#box_48_22").val(),


      // Whatever goes in box 49
      FL49_1: $("#box_49_1").val(),
      FL49_2: $("#box_49_2").val(),
      FL49_3: $("#box_49_3").val(),
      FL49_4: $("#box_49_4").val(),
      FL49_5: $("#box_49_5").val(),
      FL49_6: $("#box_49_6").val(),
      FL49_7: $("#box_49_7").val(),
      FL49_8: $("#box_49_8").val(),
      FL49_9: $("#box_49_9").val(),
      FL49_10: $("#box_49_10").val(),
      FL49_11: $("#box_49_11").val(),
      FL49_12: $("#box_49_12").val(),
      FL49_13: $("#box_49_13").val(),
      FL49_14: $("#box_49_14").val(),
      FL49_15: $("#box_49_15").val(),
      FL49_16: $("#box_49_16").val(),
      FL49_17: $("#box_49_17").val(),
      FL49_18: $("#box_49_18").val(),
      FL49_19: $("#box_49_19").val(),
      FL49_20: $("#box_49_20").val(),
      FL49_21: $("#box_49_21").val(),
      FL49_22: $("#box_49_22").val(),
    };
    updatePost(form, id)
  });
  // window.location.reload();
  function updatePost(form, id) {
    $.ajax({
      method: "PUT",
      url: "ub04services/" + id,
      data: form
    })
      .then(function () {
        res.send({redirect: "/ub04form/" +id});
      });
  }
});


