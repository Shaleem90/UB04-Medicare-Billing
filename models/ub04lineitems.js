module.exports = function (sequelize, DataTypes) {
  const dbo_UB04LineItem = sequelize.define("dbo_UB04LineItem", {
    // Giving the Author model a name of type STRING
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    PatientId: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.TEXT,
      allowNull: true
    },

    FL45_Service_Date: {
      type: DataTypes.TEXT,
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
      type: DataTypes.TEXT,
      allowNull: true
    }

  });

  dbo_UB04LineItem.associate = function (models) {

    dbo_UB04LineItem.belongsTo(models.dbo_UB04, {foreignKey: "id",  constraints: false});
  };

  return dbo_UB04LineItem;
};
