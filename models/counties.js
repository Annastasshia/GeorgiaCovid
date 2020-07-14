module.exports = function(sequelize, DataTypes) {
    const Counties = sequelize.define("Counties", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cdId: {
        type: DataTypes.INTEGER,
      }
    });
    return Counties;
  };
  