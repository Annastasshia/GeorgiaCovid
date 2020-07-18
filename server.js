"use strict";

// *** Dependencies
// =============================================================
var express = require("express");
var session = require("express-session");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

//Loads the handlebars module
const handlebars = require('express-handlebars');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets handlebars configurations 
app.engine("handlebars", handlebars({
  defaultLayout: "main",
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

//Sets our app to use the handlebars engine

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {

  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("index");
});

app.get('/counties/:countyName', (req, res) => {
  db.Coviddata.findOne({where: {cName: req.params.countyName}})
    .then(function(dbData){
      res.render("county", dbData.dataValues);
    })
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  
});

// Covid Totals
// app.get("/api/coviddatatotals", function(req, res) {
//   db.CovidData.findAll({
//     attributes: [
//       [sequelize.fn('SUM', sequelize.col('cases')), 'total_cases'],
//       [sequelize.fn('SUM', sequelize.col('deaths')), 'total_deaths'],
//       [sequelize.fn('SUM', sequelize.col('cRate')), 'total_cRate'],
//       [sequelize.fn('SUM', sequelize.col('hospital')), 'total_hospital'],
//     ],
//   }).then(function(dbCovData) {
//     console.log(dbCovData.total_cases);
//     // res.render("index", dbCoviddata.dataValues);
//     res.render("index", dbCovData.total_cases);
//   });
// });
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  
// });

app.post('/counties/:countyName', (req, res) => {
  db.Coviddata.findOne({where: {cName: req.params.countyName}})
    .then(function(dbData){
      res.render("county", dbData.dataValues);
    })
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  
});


// Routes
// =============================================================
require("./routes/api-routes.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

