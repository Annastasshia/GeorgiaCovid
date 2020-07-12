// Needs updating********************************

module.exports = function(sequelize, DataTypes) {
    var Business = sequelize.define("Business", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      add1: {
        type: DataTypes.STRING,
      },
      add2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      st: {
        type: DataTypes.STRING,
      },
      zip: {
        type: DataTypes.int,
      },
      phone: {
        type: DataTypes.int,
      },
      website: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      }
    });
    return Business;
  };
  