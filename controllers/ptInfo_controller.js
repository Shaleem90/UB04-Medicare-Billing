const db = require("../models");


exports.ub04ptInfo = function (req, res) {



    db.dbo_UB04.findOne({
        where: {
            id: req.params.id
        },
    }).then(result => {
        result.update(
            {

                //Box1 hospital addres

                FL1: req.body.FL1,
                FL1_a: req.body.FL1_a,
                FL1_b: req.body.FL1_b,
                FL1_c: req.body.FL1_c,
                FL1_d: req.body.FL1_d,

                //Box 2 hospital addres

                FL2: req.body.FL2,
                FL2_a: req.body.FL2_a,
                FL2_b: req.body.FL2_b,
                FL2_c: req.body.FL2_c,
                FL2_d: req.body.FL2_d,

                //box 3a data

                FL3_a: req.body.FL3_a,

                //box 3b data
                FL3_b: req.body.FL3_b,

                //box 4 data
                FL4: req.body.FL4,

                //box 5 data
                FL5: req.body.FL5,

                //box 6 data

                FL6_a: req.body.FL6_a,
                FL6_b: req.body.FL6_b,

                //box 7 data

                FL7: req.body.FL7,

                //box 8 data

                FL8_a: req.body.FL8_a,
                FL8_b: req.body.FL8_b,

                //box 9 data

                FL9_a: req.body.FL9_a,
                FL9_b: req.body.FL9_b,
                FL9_c: req.body.FL9_c,
                FL9_d: req.body.FL9_d,
                FL9_e: req.body.FL9_e,

                //box 10 data
                FL10: req.body.FL10,

                //box 11 data
                FL11: req.body.FL11,

                //box 12 data
                FL12: req.body.FL12,

                //box 13 data
                FL13: req.body.FL13,

                //box 14 data
                FL14: req.body.FL14,

                //box 15 data
                FL15: req.body.FL15,

                //box 16 data
                FL16: req.body.FL16,

                //box 17 data
                FL17: req.body.FL17,

                //box 18 data
                FL18: req.body.FL18,

                //box 19 data
                FL19: req.body.FL19,

                //box 20 data
                FL20: req.body.FL20,

                //box 21 data
                FL21: req.body.FL21,

                //box 22 data
                FL22: req.body.FL22,

                //box 23 data
                FL23: req.body.FL23,

                //box 24 data
                FL24: req.body.FL24,

                //box 25 data
                FL25: req.body.FL25,

                //box 26 data
                FL26: req.body.FL26,

                //box 27 data
                FL27: req.body.FL27,

                //box 28 data
                FL28: req.body.FL28,

                //box 29 data
                FL29: req.body.FL29,

                //box 30 data
                FL30: req.body.FL30,

                //box 31 data
                FL31_a: req.body.FL31_a,
                FL31_b: req.body.FL31_b,
                FL31_a1: req.body.FL31_a1,
                FL31_b1: req.body.FL31_b1,

                //box 32 data
                FL32_a: req.body.FL32_a,
                FL32_b: req.body.FL32_b,
                FL32_a1: req.body.FL32_a1,
                FL32_b1: req.body.FL32_b1,

                //box 33 data
                FL33_a: req.body.FL33_a,
                FL33_b: req.body.FL33_b,
                FL33_a1: req.body.FL33_a1,
                FL33_b1: req.body.FL33_b1,

                //box 34 data
                FL34_a: req.body.FL34_a,
                FL34_b: req.body.FL34_b,
                FL34_a1: req.body.FL34_a1,
                FL34_b1: req.body.FL34_b1,

                //box 35 data
                FL35_a: req.body.FL35_a,
                FL35_a1: req.body.FL35_a1,
                FL35_a2: req.body.FL35_a2,
                FL35_b: req.body.FL35_b,
                FL35_b1: req.body.FL35_b1,
                FL35_b2: req.body.FL35_b2,

                //box 36 data
                FL36_a: req.body.FL36_a,
                FL36_a1: req.body.FL36_a1,
                FL36_a2: req.body.FL36_a2,
                FL36_b: req.body.FL36_b,
                FL36_b1: req.body.FL36_b1,
                FL36_b2: req.body.FL36_b2,

                //box 37 data
                FL37: req.body.FL37,
                FL37_b: req.body.FL37_b,

                //box 38 data
                FL38Name: req.body.FL38Name,
                FL38Street: req.body.FL38Street,
                FL38City: req.body.FL38City,
                FL38State: req.body.FL38State,
                FL38Zip: req.body.FL38Zip,

                //box 39 data
                FL39_a1: req.body.FL39_a1,
                FL39_a2: req.body.FL39_a2,
                FL39_b1: req.body.FL39_b1,
                FL39_b2: req.body.FL39_b2,
                FL39_c1: req.body.FL39_c1,
                FL39_c2: req.body.FL39_c2,
                FL39_d1: req.body.FL39_d1,
                FL39_d2: req.body.FL39_d2,

                //box 40 data
                FL40_a1: req.body.FL40_a1,
                FL40_a2: req.body.FL40_a2,
                FL40_b1: req.body.FL40_b1,
                FL40_b2: req.body.FL40_b2,
                FL40_c1: req.body.FL40_c1,
                FL40_c2: req.body.FL40_c2,
                FL40_d1: req.body.FL40_d1,
                FL40_d2: req.body.FL40_d2,


                //box 41 data
                FL41_a1: req.body.FL41_a1,
                FL41_a2: req.body.FL41_a2,
                FL41_b1: req.body.FL41_b1,
                FL41_b2: req.body.FL41_b2,
                FL41_c1: req.body.FL41_c1,
                FL41_c2: req.body.FL41_c2,
                FL41_d1: req.body.FL41_d1,
                FL41_d2: req.body.FL41_d2,

                //box 45_23 data
                FL45_23: req.body.FL45_23,

                //box 47_23 data
                FL47_23: req.body.FL47_23,

                //box 48_23 data
                FL48_23: req.body.FL48_23,

                //box 50 data
                FL50_a: req.body.FL50_a,
                FL50_b: req.body.FL50_b,
                FL50_c: req.body.FL50_c,

                //box 51 data
                FL51_a: req.body.FL51_a,
                FL51_b: req.body.FL51_b,
                FL51_c: req.body.FL51_c,

                //box 52 data
                FL52_a: req.body.FL52_a,
                FL52_b: req.body.FL52_b,
                FL52_c: req.body.FL52_c,

                //box 53 data
                FL53_a: req.body.FL53_a,
                FL53_b: req.body.FL53_b,
                FL53_c: req.body.FL53_c,

                //box 54 data
                FL54_a: req.body.FL54_a,
                FL54_b: req.body.FL54_b,
                FL54_c: req.body.FL54_c,

                //box 55 data

                FL55_a: req.body.FL55_a,
                FL55_b: req.body.FL55_b,
                FL55_c: req.body.FL55_c,

                //box 56 data
                FL56: req.body.FL56,


                //box 57 data
                FL57_a: req.body.FL57_a,
                FL57_b: req.body.FL57_b,
                FL57_c: req.body.FL57_c,


                //box 58 data
                FL58_a: req.body.FL58_a,
                FL58_b: req.body.FL58_b,
                FL58_c: req.body.FL58_c,


                //box 59 data
                FL59_a: req.body.FL59_a,
                FL59_b: req.body.FL59_b,
                FL59_c: req.body.FL59_c,

                //box 60 data
                FL60_a: req.body.FL60_a,
                FL60_b: req.body.FL60_b,
                FL60_c: req.body.FL60_c,

                //box 61 data
                FL61_a: req.body.FL61_a,
                FL61_b: req.body.FL61_b,
                FL61_c: req.body.FL61_c,


                //box 62 data
                FL62_a: req.body.FL62_a,
                FL62_b: req.body.FL62_b,
                FL62_c: req.body.FL62_c,


                //box 63 data
                FL63_a: req.body.FL63_a,
                FL63_b: req.body.FL63_b,
                FL63_c: req.body.FL63_c,

                //box 64 data
                FL64_a: req.body.FL64_a,
                FL64_b: req.body.FL64_b,
                FL64_c: req.body.FL64_c,

                //box 65 data
                FL65_a: req.body.FL65_a,
                FL65_b: req.body.FL65_b,
                FL65_c: req.body.FL65_c,

                //box 66 data
                FL66: req.body.FL66,


                //box 67 data
                FL67: req.body.FL67,
                FL67_a: req.body.FL67_a,
                FL67_b: req.body.FL67_b,
                FL67_c: req.body.FL67_c,
                FL67_d: req.body.FL67_d,
                FL67_e: req.body.FL67_e,
                FL67_f: req.body.FL67_f,
                FL67_g: req.body.FL67_g,
                FL67_h: req.body.FL67_h,
                FL67_i: req.body.FL67_i,
                FL67_j: req.body.FL67_j,
                FL67_k: req.body.FL67_k,
                FL67_l: req.body.FL67_l,
                FL67_m: req.body.FL67_m,
                FL67_n: req.body.FL67_n,
                FL67_o: req.body.FL67_0,
                FL67_p: req.body.FL67_p,
                FL67_q: req.body.FL67_q,

                //box 68 data
                FL68: req.body.FL68,
                FL68_a: req.body.FL68_a,

                //box 69 data
                FL69: req.body.FL69,

                //box 70 data
                FL70_a: req.body.FL70_a,
                FL70_b: req.body.FL70_b,
                FL70_c: req.body.FL70_c,


                //box 71 data
                FL71: req.body.FL71,


                //box 72 data
                FL72_a: req.body.FL72_a,
                FL72_b: req.body.FL72_b,
                FL72_c: req.body.FL72_c,

                //box 73 data
                FL73: req.body.FL73,

                //box 74 data
                FL74_1: req.body.FL74_1,
                FL74_2: req.body.FL74_2,
                FL74_a1: req.body.FL74_a1,
                FL74_a2: req.body.FL74_a2,
                FL74_b1: req.body.FL74_b1,
                FL74_b2: req.body.FL74_b2,
                FL74_c1: req.body.FL74_c1,
                FL74_c2: req.body.FL74_c2,
                FL74_d1: req.body.FL74_d1,
                FL74_d2: req.body.FL74_d2,
                FL74_e1: req.body.FL74_e1,
                FL74_e2: req.body.FL74_e2,

                //box 75 data
                FL75: req.body.FL75,

                //box 76 data
                FL76_a: req.body.FL76_a,
                FL76_b: req.body.FL76_b,
                FL76_c: req.body.FL76_c,
                FL76_d: req.body.FL76_d,
                FL76_e: req.body.FL76_e,

                //box 77 data
                FL77_a: req.body.FL77_a,
                FL77_b: req.body.FL77_b,
                FL77_c: req.body.FL77_c,
                FL77_d: req.body.FL77_d,
                FL77_e: req.body.FL77_e,


                //box 78 data
                FL78: req.body.FL78,
                FL78_a: req.body.FL78_a,
                FL78_b: req.body.FL78_b,
                FL78_c: req.body.FL78_c,
                FL78_d: req.body.FL78_d,
                FL78_e: req.body.FL78_e,

                //box 79 data
                FL79: req.body.FL79,
                FL79_a: req.body.FL79_a,
                FL79_b: req.body.FL79_b,
                FL79_c: req.body.FL79_c,
                FL79_d: req.body.FL79_d,
                FL79_e: req.body.FL79_e,

                //box 80 data
                FL80b: req.body.FL80_b,
                FL80c: req.body.FL80_c,
                FL80d: req.body.FL80_d,
                //box 81 data
                FL81_a1: req.body.FL81_a1,
                FL81_a2: req.body.FL81_a2,
                FL81_a3: req.body.FL81_a3,
                FL81_b1: req.body.FL81_b1,
                FL81_b2: req.body.FL81_b2,
                FL81_b3: req.body.FL81_b3,
                FL81_c1: req.body.FL81_c1,
                FL81_c2: req.body.FL81_c2,
                FL81_c3: req.body.FL81_c3,
                FL81_d1: req.body.FL81_d1,
                FL81_d2: req.body.FL81_d2,
                FL81_d3: req.body.FL81_d3,



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
