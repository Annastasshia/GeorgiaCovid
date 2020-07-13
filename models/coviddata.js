module.exports = function(sequelize, DataTypes) {
    const Coviddata = sequelize.define("Coviddata", {
      cName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cases: {
        type: DataTypes.INTEGER,
      },
      deaths: {
        type: DataTypes.INTEGER,
      },
      cRate: {
        type: DataTypes.INTEGER,
      },
      hospital: {
        type: DataTypes.INTEGER,
      }
    });
    return Coviddata;
  };
  