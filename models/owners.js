module.exports = function(sequelize, DataTypes) {
    const Owners = sequelize.define("Owners", {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      }
    });
    return Owners;
  };
  