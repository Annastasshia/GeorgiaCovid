// basic index.js  should not need updating********************************

"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  // Not sure this did not work, however it does with new code****************************
  // .forEach(function(file) {
  //   var model = sequelize["import"](path.join(__dirname, file));
  //   db[model.name] = model;
  // });
//   .forEach((file) => {
//     // const model = sequelize.import(path.join('./models', file));
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize)
//     sequelize[model.name] = model;
// });
.forEach(function(file) {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
 });
// .forEach(function (file) {
//   var model = sequelize.import(path.join(__dirname + '/models', file));
//   models[model.name] = model;
// });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Incudes
// db.Business = require('./business')(sequelize, Sequelize);
// db.Cities = require('./cities')(sequelize, Sequelize);
// db.County = require('./county')(sequelize, Sequelize);
// db.Coviddata = require('./coviddata')(sequelize, Sequelize);

module.exports = db;
