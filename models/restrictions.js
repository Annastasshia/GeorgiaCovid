module.exports = function(sequelize, DataTypes) {
    var Restrictions = sequelize.define("Restrictions", {
      mask: {
        type: DataTypes.BOOLEAN,
      },
      distancing: {
        type: DataTypes.BOOLEAN,
      },
      gloves: {
        type: DataTypes.BOOLEAN,
      },
      hWashing: {
        type: DataTypes.BOOLEAN,
      },
      temp: {
        type: DataTypes.BOOLEAN,
      },
      cOut: {
        type: DataTypes.BOOLEAN,
      },
      dThru: {
        type: DataTypes.BOOLEAN,
      },
      lServices: {
        type: DataTypes.BOOLEAN,
      },
      pSanitized: {
        type: DataTypes.BOOLEAN,
      },
      tested: {
        type: DataTypes.BOOLEAN,
      },
      bId: {
        type: DataTypes.INTEGER,
      }
    });
    return Restrictions;
  };
  