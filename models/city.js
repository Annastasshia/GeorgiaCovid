// Needs updating********************************

module.exports = function(sequelize, DataTypes) {
    var City = sequelize.define("City", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cId: {
        type: DataTypes.int,
      }
    });
    return City;
  };
  