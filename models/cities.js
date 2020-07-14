module.exports = function(sequelize, DataTypes) {
    var Cities = sequelize.define("Cities", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cId: {
        type: DataTypes.INTEGER,
      }
    });
    return Cities;
  };
  