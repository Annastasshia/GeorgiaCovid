// Needs updating********************************

module.exports = function(sequelize, DataTypes) {
    var Coviddata = sequelize.define("Coviddata", {
      cName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cases: {
        type: DataTypes.int,
      },
      deaths: {
        type: DataTypes.int,
      },
      cRate: {
        type: DataTypes.int,
      },
      hospital: {
        type: DataTypes.int,
      }
    });
    return Coviddata;
  };
  