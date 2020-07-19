module.exports = function(sequelize, DataTypes) {
    const dbo_UB04 = sequelize.define("dbo_UB04", {
     
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        PatientId: { 
            type: DataTypes.STRING(20),
            allowNull: false,

        },

        title: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL1: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },
        FL1_a: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },
        FL1_b: { 
            type: DataTypes.STRING(30),
            allowNull: false
        },

        FL1_c: { 
            type: DataTypes.STRING(2),
            allowNull: false
        },
        FL1_d: { 
            type: DataTypes.STRING(5),
            allowNull: false
        },

        FL2: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },
        FL2_a: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },

        FL2_b: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL2_c: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },
        FL2_d: { 
            type: DataTypes.STRING(5),
            allowNull: true
        },

        FL3_a: { 
            type: DataTypes.STRING(24),
            allowNull: true
        },

        FL3_b: { 
            type: DataTypes.STRING(24),
            allowNull: true
        },

        FL4: { 
            type: DataTypes.STRING(4),
            allowNull: false
        },

        FL5: { 
            type: DataTypes.STRING(20),
            allowNull: false
        },

        FL6_a: { 
            type: DataTypes.STRING(10),
            allowNull: false
        },

        FL6_b: { 
            type: DataTypes.STRING(10),
            allowNull: false
        },

        FL7: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL8_a: { 
            type: DataTypes.STRING(24),
            allowNull: false
        },

        FL8_b: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },

        FL9_a: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },

        FL9_b: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },

        FL9_c: { 
            type: DataTypes.STRING(2),
            allowNull: false
        },

        FL9_d: { 
            type: DataTypes.STRING(6),
            allowNull: false
        },

        FL9_e: { 
            type: DataTypes.STRING(4),
            allowNull: true
        },

        FL10: { 
            type: DataTypes.STRING(10),
            allowNull: false
        },

        FL11: { 
            type: DataTypes.STRING(1),
            allowNull: false
        },

        FL12: { 
            type: DataTypes.STRING(10),
            allowNull: false
        },

        FL13: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL14: { 
            type: DataTypes.STRING(4),
            allowNull: true
        },

        FL15: { 
            type: DataTypes.STRING(4),
            allowNull: true
        },

        FL16: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL17: { 
            type: DataTypes.STRING(4),
            allowNull: true
        },

        FL18: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL19: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL20: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL21: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL22: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL23: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL24: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL25: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL26: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },
        FL27: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL28: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL29: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL30: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },
// possible company error on box codes
        FL31_a: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL31_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL31_a1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL31_b1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL32_a: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL32_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL32_a1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL32_b1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL33_a: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL33_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL33_a1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL33_b1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL34_a: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL34_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL34_a1: { 
            type: DataTypes.STRING(10),
            allowNull: true 
        },

        FL34_b1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL35_a: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL35_a1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL35_a2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL35_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL35_b1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL35_b2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL36_a: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL36_a1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL36_a2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL36_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL36_b1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL36_b2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL37: { 
            type: DataTypes.STRING(12),
            allowNull: true
        },

        FL37_b: { 
            type: DataTypes.STRING(12),
            allowNull: true
        },

        FL38Name: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },
        FL38Street: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },
        FL38City: { 
            type: DataTypes.STRING(30),
            allowNull: false
        },
        FL38State: { 
            type: DataTypes.STRING(2),
            allowNull: false
        },
        FL38Zip: { 
            type: DataTypes.STRING(6),
            allowNull: false
        },

        FL39_a1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL39_a2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL39_b1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL39_b2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL39_c1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL39_c2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL39_d1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL39_d2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL40_a1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL40_a2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL40_b1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL40_b2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL40_c1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL40_c2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL40_d1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL40_d2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL41_a1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL41_a2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL41_b1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL41_b2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL41_c1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL41_c2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL41_d1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL41_d2: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL45_23: { 
            type: DataTypes.TEXT,
            allowNull: true
        },

        FL47_23: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
            defaultValue: 0.00
        },
        
        FL48_23: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
            defaultValue: 0.00
        },

        FL50_a: { 
            type: DataTypes.STRING(50),
            allowNull: false
        },

        FL50_b: { 
            type: DataTypes.STRING(50),
            allowNull: true
        },

        FL50_c: { 
            type: DataTypes.STRING(50),
            allowNull: true
        },

        FL51_a: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL51_b: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL51_c: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL52_a: { 
            type: DataTypes.STRING(1),
            allowNull: false
        },

        FL52_b: { 
            type: DataTypes.STRING(1),
            allowNull: false
        },

        FL52_c: { 
            type: DataTypes.STRING(1),
            allowNull: false
        },

        FL53_a: { 
            type: DataTypes.STRING(1),
            allowNull: false 
        },

        FL53_b: { 
            type: DataTypes.STRING(1),
            allowNull: false
        },

        FL53_c: { 
            type: DataTypes.STRING(1),
            allowNull: false
        },

        FL54_a: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL54_b: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL54_c: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL55_a: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL55_b: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },

        FL55_c: { 
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        FL56: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL57_a: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL57_b: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL57_c: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL58_a: { 
            type: DataTypes.STRING(50),
            allowNull: false
        },

        FL58_b: { 
            type: DataTypes.STRING(50),
            allowNull: true
        },

        FL58_c: { 
            type: DataTypes.STRING(50),
            allowNull: true
        },

        FL59_a: { 
            type: DataTypes.STRING(2),
            allowNull: false
        },

        FL59_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL59_c: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL60_a: { 
            type: DataTypes.STRING(15),
            allowNull: false
        },

        FL60_b: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL60_c: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL61_a: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL61_b: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL61_c: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL62_a: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL62_b: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL62_c: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL63_a: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL63_b: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL63_c: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL64_a: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL64_b: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL64_c: { 
            type: DataTypes.STRING(15),
            allowNull: true
        },

        FL65_a: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL65_b: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL65_c: { 
            type: DataTypes.STRING(30),
            allowNull: true
        },

        FL66: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL67: { 
            type: DataTypes.STRING(10),
            allowNull: false
        },

        FL67_a: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_b: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_c: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_d: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_e: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_f: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_g: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_h: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_i: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_j: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_k: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_l: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_m: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_n: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_o: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_p: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL67_q: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL68: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL68_a: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL69: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL70_a: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL70_b: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL70_c: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL71: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL72_a: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL72_b: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL72_c: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL73: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_a1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_a2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_b1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_b2: { 
            type: DataTypes.STRING(10),
            allowNull: true 
        },

        FL74_c1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_c2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_d1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_d2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_e1: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL74_e2: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL75: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },
      
        FL76_a: { 
            type: DataTypes.STRING(10),
            allowNull: false
        },

        FL76_b: { 
            type: DataTypes.STRING(2),
            allowNull: false
        },

        FL76_c: { 
            type: DataTypes.STRING(20),
            allowNull: false
        },

        FL76_d: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },

        FL76_e: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },

        FL77_a: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL77_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL77_c: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL77_d: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },

        FL77_e: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },

        FL78: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL78_a: { 
            type: DataTypes.STRING(10),
            allowNull: true
        },

        FL78_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL78_c: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL78_d: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },

        FL78_e: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },

        FL79: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL79_a: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL79_b: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL79_c: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL79_d: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },

        FL79_e: { 
            type: DataTypes.STRING(40),
            allowNull: true
        },

        FL80b: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

        FL80c: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

        FL80d: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

        FL81_a1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL81_a2: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL81_a3: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL81_b1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL81_b2: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL81_b3: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL81_c1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL81_c2: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },
        FL81_c3: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL81_d1: { 
            type: DataTypes.STRING(2),
            allowNull: true
        },

        FL81_d2: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        FL81_d3: { 
            type: DataTypes.STRING(20),
            allowNull: true
        },

        ModuleID: { 
            type: DataTypes.INTEGER,
            allowNull: true
        },

        ModuleName: { 
            type: DataTypes.STRING(25),
            allowNull: true
        },

        textInfo1: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

        textInfo2: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

        textInfo3: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

        textInfo4: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

        textInfo5: { 
            type: DataTypes.STRING(100),
            allowNull: true
        },

    })


    dbo_UB04.associate = function(models) {
  
        dbo_UB04.hasOne(models.dbo_UB04LineItem, {foreignKey: "id", constraints: false});
    };

    return dbo_UB04;
};