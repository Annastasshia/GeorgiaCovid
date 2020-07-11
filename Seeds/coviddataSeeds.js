// install npm package request

var request = require('request');
var mysql = require("mysql");

// Database mySql connection info****************************
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "covid_DB"
});

// API Call for  Covid Data************************************
request('https://services1.arcgis.com/bqfNVPUK3HOnCFmA/arcgis/rest/services/Coronavirus_Cases_in_Georgia/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const obj = JSON.parse(body);
    console.log(obj.features);
    console.log("----------------------------------");
    console.log(obj.features[3].attributes.OBJECTID);
    con.connect(function(err) {
    for (let i=0; i < obj.features.length; i++) {
        con.query(`INSERT INTO coviddata (id, cName, cases, deaths, cRate, hospital) VALUES (${obj.features[i].attributes.OBJECTID}, "${obj.features[i].attributes.CountyName}", ${obj.features[i].attributes.NumberReportedCases}, ${obj.features[i].attributes.Deaths}, ${obj.features[i].attributes.CaseRate}, ${obj.features[i].attributes.Hospitalizations})`, function (err, result) {
            if(err) throw err;
            console.log('VALUES ADDED')
        });
      }
    })
  }
})
