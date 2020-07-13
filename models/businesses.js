module.exports = function(sequelize, DataTypes) {
    const Businesses = sequelize.define("Businesses", {
      name: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      website: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      oId: {
        type: DataTypes.INTEGER,
      }
    });
    return Businesses;
  };
  