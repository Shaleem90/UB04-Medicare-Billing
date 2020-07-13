module.exports = function(sequelize, DataTypes) {
    const dbo_UBO4LIneitems = sequelize.define("dbo_UBO4LIneitems", {
      // Giving the Author model a name of type STRING
        UB04: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        Revenue_Code: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        Description: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        Page: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        HCPS_Rates: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        Service_Date: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        Created_Date: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        Service_Units: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        Total_Charges: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        Noncovered_Charges: { 
            type: DataTypes.STRING,
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