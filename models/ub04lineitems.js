module.exports = function(sequelize, DataTypes) {
    const dbo_UBO4LIneitems = sequelize.define("dbo_UBO4LIneitems", {
      // Giving the Author model a name of type STRING
        UB04: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        PatientId: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Client_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        FL42_Revenue_Code: { 
            type: DataTypes.TEXT,
            allowNull: false
        },

        FL43_Description: { 
            type: DataTypes.TEXT,
            allowNull: false
        },

        FL44_HCPS_Rates: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL45_Service_Date: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL46_Service_Units: { 
            type: DataTypes.TEXT,
            allowNull: false
        },

        FL47_Total_Charges: { 
            type: DataTypes.TEXT,
            allowNull: false
            
        },

        FL48_Noncovered_Charges: { 
            type: DataTypes.TEXT,
            allowNull: true
        },

        FL49: { 
            type: DataTypes.STRING,
            allowNull: true
        }

    });
  
    // dbo_UBO4LIneitems.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   Author.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return dbo_UBO4LIneitems;
  };