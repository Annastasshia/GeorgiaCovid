module.exports = function(sequelize, DataTypes) {
    const Days = sequelize.define("Days", {
      day: {
        type: DataTypes.STRING,
      },
    open: {
        type: DataTypes.INTEGER,
      },
    close: {
    type: DataTypes.INTEGER,
    },
      bId: {
        type: DataTypes.INTEGER,
      }
    });
    return Days;
  };
  