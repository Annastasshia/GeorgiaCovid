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
.forEach(function(file) {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
 });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Incudes
db.Owners = require('../models/owners.js')(sequelize, Sequelize);
db.Businesses = require('../models/businesses.js')(sequelize, Sequelize);
db.Cities = require('../models/cities.js')(sequelize, Sequelize);
db.Counties = require('../models/counties.js')(sequelize, Sequelize);
db.Coviddata = require('../models/coviddata.js')(sequelize, Sequelize);
db.Restrictions = require('../models/restrictions.js')(sequelize, Sequelize);
db.Changes = require('../models/changes.js')(sequelize, Sequelize);
db.Days = require('../models/days.js')(sequelize, Sequelize);

// Relations
db.Owners.hasMany(db.Businesses);
db.Businesses.belongsTo(db.Owners);


db.Businesses.hasMany(db.Changes);
db.Changes.belongsTo(db.Businesses);
db.Businesses.hasOne(db.Restrictions);
db.Restrictions.belongsTo(db.Businesses);
db.Businesses.hasOne(db.Days);
db.Days.belongsTo(db.Businesses);


module.exports = db;
