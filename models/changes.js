module.exports = function(sequelize, DataTypes) {
    const Changes = sequelize.define("Changes", {
    lStaff: {
        type: DataTypes.INTEGER,
              },
    closed: {
        type: DataTypes.BOOLEAN,
      },
    reopens: {
        type: DataTypes.DATEONLY,
      },
    mAllowed: {
        type: DataTypes.INTEGER,
      },
    comments: {
        type: DataTypes.STRING,
      },
    bId: {
        type: DataTypes.INTEGER,
      }
    });
    return Changes;
  };
  