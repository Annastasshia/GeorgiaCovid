// Needs updating********************************

module.exports = function(sequelize, DataTypes) {
    var County = sequelize.define("County", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cdId: {
        type: DataTypes.int,
      }
    });
    return County;
  };
  