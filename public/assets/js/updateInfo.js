$(function () {

  $(".update").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");

    const form = {
      //Box1 hospital addres

      FL1: $("#box1_hosp_address").val(),
      FL1_a: $("#box1_hosp").val(),
      FL1_b: $("#box1_city").val(),
      FL1_c: $("#box1_state").val(),
      FL1_d: $("#box1_zipcode").val(),

      //Box 2 hospital addres

      FL2: $("#box2_hosp_address").val(),
      FL2_a: $("#box2_street").val(),
      FL2_b: $("#box2_city").val(),
      FL2_c: $("#box2_state").val(),
      FL2_d: $("#box2_zipcode").val(),

      //box 3a data

      FL3_a: $("#box_3a_data").val(),

      //box 3b data
      FL3_b: $("#box_3b_data").val(),

      //box 4 data
      FL4: $("#box_4_data").val(),

      //box 5 data
      FL5: $("#fed_tax").val(),

      //box 6 data

      FL6_a: $("#box6_from").val(),
      FL6_b: $("#box6_through").val(),

      //box 7 data

      FL7: $("#box_7").val(),

      //box 8 data

      FL8_a: $("#patient_id").val(),
      FL8_b: $("#box_8b").val(),

      //box 9 data

      FL9_a: $("#patient_address").val(),
      FL9_b: $("#box_9b").val(),
      FL9_c: $("#box_9c").val(),
      FL9_d: $("#box_9d").val(),
      FL9_e: $("#box_9e").val(),

      //box 10 data
      FL10: $("#box_10_data").val(),
      //box 11 data
      FL11: $("#box_11_data").val(),
      //box 12 data
      FL12: $("#box_12").val(),
      //box 13 data
      FL13: $("#box_13_data").val(),
      //box 14 data
      FL14: $("#box_14_data").val(),
      //box 15 data
      FL15: $("#box_15_data").val(),
      //box 16 data
      FL16: $("#box_16_data").val(),
      //box 17 data
      FL17: $("#box_17_data").val(),
      //box 18 data
      FL18: $("#box_18_data").val(),
      //box 19 data
      FL19: $("#box_19_data").val(),
      //box 20 data
      FL20: $("#box_20_data").val(),
      //box 21 data
      FL21: $("#box_21_data").val(),
      //box 22 data
      FL22: $("#box_22_data").val(),
      //box 23 data
      FL23: $("#box_23_data").val(),
      //box 24 data
      FL24: $("#box_24_data").val(),
      //box 25 data
      FL25: $("#box_25_data").val(),
      //box 26 data
      FL26: $("#box_26_data").val(),

      //box 27 data
      FL27: $("#box_27_data").val(),

      //box 28 data

      FL28: $("#box_28_data").val(),

      //box 29 data

      FL29: $("#box_29_data").val(),

      //box 30 data

      FL30: $("#box_30_data").val(),

      //box 31 data
      FL31_a: $("#box_31_code").val(),
      FL31_b: $("#box_31b_code").val(),
      FL31_a1: $("#box_31_date").val(),
      FL31_b1: $("#box_31b_date").val(),

      //box 32 data
      FL32_a: $("#box_32_code").val(),
      FL32_b: $("#box_32b_code").val(),
      FL32_a1: $("#box_32_date").val(),
      FL32_b1: $("#box_32b_code").val(),

      //box 33 data
      FL33_a: $("#box_33_code").val(),
      FL33_b: $("#box_33b_code").val(),
      FL33_a1: $("#box_33_date").val(),
      FL33_b1: $("#box_33b_date").val(),

      //box 34 data
      FL34_a: $("#box_34_code").val(),
      FL34_b: $("#box_34b_code").val(),
      FL34_a1: $("#box_34_date").val(),
      FL34_b1: $("#box_34b_date").val(),

      //box 35 data
      FL35_a: $("#box_35_code").val(),
      FL35_a1: $("#box_35_from").val(),
      FL35_a2: $("#box_35_through").val(),
      FL35_b: $("#box_35b_code").val(),
      FL35_b1: $("#box_35b_from").val(),
      FL35_b2: $("#box_35b_through").val(),

      //box 36 data
      FL36_a: $("#box_36_code").val(),
      FL36_a1: $("#box_36_from").val(),
      FL36_a2: $("#box_36_through").val(),
      FL36_b: $("#box_36b_code").val(),
      FL36_b1: $("#box_36b_from").val(),
      FL36_b2: $("#box_36b_through").val(),

      //box 37 data
      FL37: $("#box_37").val(),
      FL37_b: $("#box_37b").val(),

      //box 38 data
      FL38Name: $("#box_38_hospital").val(),
      FL38Street: $("#box_38_street").val(),
      FL38City: $("#box_38_city").val(),
      FL38State: $("#box_38_state").val(),
      FL38Zip: $("#box_38_zipcode").val(),

      //box 39 data
      FL39_a1: $("#box_39_code").val(),
      FL39_a2: $("#box_39_amount").val(),
      FL39_b1: $("#box_39b_code").val(),
      FL39_b2: $("#box_39b_amount").val(),
      FL39_c1: $("#box_39c_code").val(),
      FL39_c2: $("#box_39c_amount").val(),
      FL39_d1: $("#box_39d_code").val(),
      FL39_d2: $("#box_39d_amount").val(),

      //box 40 data
      FL40_a1: $("#box_40_code").val(),
      FL40_a2: $("#box_40_amount").val(),
      FL40_b1: $("#box_40b_code").val(),
      FL40_b2: $("#box_40b_amount").val(),
      FL40_c1: $("#box_40c_code").val(),
      FL40_c2: $("#box_40c_amount").val(),
      FL40_d1: $("#box_40d_code").val(),
      FL40_d2: $("#box_40d_amount").val(),


      //box 41 data
      FL41_a1: $("#box_41_code").val(),
      FL41_a2: $("#box_41_amount").val(),
      FL41_b1: $("#box_41b_code").val(),
      FL41_b2: $("#box_41b_amount").val(),
      FL41_c1: $("#box_41c_code").val(),
      FL41_c2: $("#box_41c_amount").val(),
      FL41_d1: $("#box_41d_code").val(),
      FL41_d2: $("#box_41d_amount").val(),

      //box 45_23 data
      FL45_23: $("#box_creationDate").val(),

      //box 47_23 data
      FL47_23: $("#totals").val(),

      //box 48_23 data
      FL48_23: $("#box_48_23").val(),

      //box 50 data
      FL50_a: $("#box_50_A").val(),
      FL50_b: $("#box_50_B").val(),
      FL50_c: $("#box_50_C").val(),

      //box 51 data
      FL51_a: $("#box_51_A").val(),
      FL51_b: $("#box_51_B").val(),
      FL51_c: $("#box_51_C").val(),

      //box 52 data
      FL52_a: $("#box_52_A").val(),
      FL52_b: $("#box_52_B").val(),
      FL52_c: $("#box_52_C").val(),

      //box 53 data
      FL53_a: $("#box_53_A").val(),
      FL53_b: $("#box_53_B").val(),
      FL53_c: $("#box_53_C").val(),

      //box 54 data
      FL54_a: $("#box_54_A").val(),
      FL54_b: $("#box_54_B").val(),
      FL54_c: $("#box_54_C").val(),

      //box 55 data

      FL55_a: $("#box_55_A").val(),
      FL55_b: $("#box_55_B").val(),
      FL55_c: $("#box_55_C").val(),

      //box 56 data
      FL56: $("#box_56_data").val(),


      //box 57 data
      FL57_a: $("#box_57_A").val(),
      FL57_b: $("#box_57_B").val(),
      FL57_c: $("#box_57_C").val(),


      //box 58 data
      FL58_a: $("#box_58_insuredName").val(),
      FL58_b: $("#box_58_B").val(),
      FL58_c: $("#box_58_C").val(),


      //box 59 data
      FL59_a: $("#box_59_A").val(),
      FL59_b: $("#box_59_B").val(),
      FL59_c: $("#box_59_C").val(),

      //box 60 data
      FL60_a: $("#box_60_A").val(),
      FL60_b: $("#box_60_B").val(),
      FL60_c: $("#box_60_C").val(),

      //box 61 data
      FL61_a: $("#box_61_A").val(),
      FL61_b: $("#box_61_B").val(),
      FL61_c: $("#box_61_C").val(),


      //box 62 data
      FL62_a: $("#box_62_A").val(),
      FL62_b: $("#box_62_B").val(),
      FL62_c: $("#box_62_C").val(),


      //box 63 data
      FL63_a: $("#box_63_A").val(),
      FL63_b: $("#box_63_B").val(),
      FL63_c: $("#box_63_C").val(),

      //box 64 data
      FL64_a: $("#box_64_A").val(),
      FL64_b: $("#box_64_B").val(),
      FL64_c: $("#box_64_C").val(),

      //box 65 data
      FL65_a: $("#box_65_A").val(),
      FL65_b: $("#box_65_B").val(),
      FL65_c: $("#box_65_C").val(),

      //box 66 data
      FL66: $("#box_66_under").val(),


      //box 67 data
      FL67: $("#box_67").val(),
      FL67_a: $("#box_67_a").val(),
      FL67_b: $("#box_67_b").val(),
      FL67_c: $("#box_67_c").val(),
      FL67_d: $("#box_67_d").val(),
      FL67_e: $("#box_67_e").val(),
      FL67_f: $("#box_67_f").val(),
      FL67_g: $("#box_67_g").val(),
      FL67_h: $("#box_67_h").val(),
      FL67_i: $("#box_67_i").val(),
      FL67_j: $("#box_67_j").val(),
      FL67_k: $("#box_67_k").val(),
      FL67_l: $("#box_67_l").val(),
      FL67_m: $("#box_67_m").val(),
      FL67_n: $("#box_67_n").val(),
      FL67_o: $("#box_67_o").val(),
      FL67_p: $("#box_67_p").val(),
      FL67_q: $("#box_67_q").val(),

      //box 68 data
      FL68: $("#box_68_up").val(),
      FL68_a: $("#box_68_under").val(),

      //box 69 data
      FL69: $("#box_69_data").val(),

      //box 70 data
      FL70_a: $("#box_70_a").val(),
      FL70_b: $("#box_70_b").val(),
      FL70_c: $("#box_70_c").val(),


      //box 71 data
      FL71: $("#box_71_data").val(),


      //box 72 data
      FL72_a: $("#box_72_a").val(),
      FL72_b: $("#box_72_b").val(),
      FL72_c: $("#box_72_c").val(),

      //box 73 data
      FL73: $("#box_73").val(),

      //box 74 data
      FL74_1: $("#box_74_code").val(),
      FL74_2: $("#box_74_date").val(),
      FL74_a1: $("#box_74a_code").val(),
      FL74_a2: $("#box_74a_date").val(),
      FL74_b1: $("#box_74b_code").val(),
      FL74_b2: $("#box_74b_date").val(),
      FL74_c1: $("#box_74c_code").val(),
      FL74_c2: $("#box_74c_date").val(),
      FL74_d1: $("#box_74d_code").val(),
      FL74_d2: $("#box_74d_date").val(),
      FL74_e1: $("#box_74e_code").val(),
      FL74_e2: $("#box_74e_date").val(),

      //box 75 data
      FL75: $("#box_75").val(),

      //box 76 data
      FL76_a: $("#box_76_npi").val(),
      FL76_b: $("#box_76_qual").val(),
      FL76_c: $("#box_76_num").val(),
      FL76_d: $("#box_76_last").val(),
      FL76_e: $("#box_76_first").val(),

      //box 77 data
      FL77_a: $("#box_77_npi").val(),
      FL77_b: $("#box_77_qual").val(),
      FL77_c: $("#box_77_num").val(),
      FL77_d: $("#box_77_last").val(),
      FL77_e: $("#box_77_first").val(),


      //box 78 data
      FL78: $("#box_78_other").val(),
      FL78_a: $("#box_78_npi").val(),
      FL78_b: $("#box_78_qual").val(),
      FL78_c: $("#box_78_num").val(),
      FL78_d: $("#box_78_last").val(),
      FL78_e: $("#box_78_first").val(),

      //box 79 data
      FL79: $("#box_79_other").val(),
      FL79_a: $("#box_79_npi").val(),
      FL79_b: $("#box_79_qual").val(),
      FL79_c: $("#box_79_num").val(),
      FL79_d: $("#box_79_last").val(),
      FL79_e: $("#box_79_first").val(),

      //box 80 data
      FL80b: $("#box_80b").val(),
      FL80c: $("#box_80c").val(),
      FL80d: $("#box_80d").val(),

      //box 81 data
      FL81_a1: $("#box_81aOne").val(),
      FL81_a2: $("#box_81aTwo").val(),
      FL81_a3: $("#box_81aThree").val(),
      FL81_b1: $("#box_81bOne").val(),
      FL81_b2: $("#box_81bTwo").val(),
      FL81_b3: $("#box_81bThree").val(),
      FL81_c1: $("#box_81cOne").val(),
      FL81_c2: $("#box_81cTwo").val(),
      FL81_c3: $("#box_81cThree").val(),
      FL81_d1: $("#box_81dOne").val(),
      FL81_d2: $("#box_81dTwo").val(),
      FL81_d3: $("#box_81dThree").val(),

    };
    updatePost(form, id)
  });
  // window.location.reload();
  function updatePost(form, id) {
    $.ajax({
      method: "PUT",
      url: "ub04ptInfo/" + id,
      data: form
    })
      .then(function () {
        
        res.send({ redirect: "/ub04form/" + id });
        
      });
  }
});

