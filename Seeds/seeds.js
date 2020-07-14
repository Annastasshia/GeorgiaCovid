var db = require("../models");

// install npm package request
var request = require('request');


// API Call for  Covid Data************************************
request('https://services1.arcgis.com/bqfNVPUK3HOnCFmA/arcgis/rest/services/Coronavirus_Cases_in_Georgia/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const obj = JSON.parse(body);
    const insertData = obj.features.map(ele => ({
      id: ele.attributes.OBJECTID,
      cName: ele.attributes.CountyName,
      cases: ele.attributes.NumberReportedCases,
      deaths: ele.attributes.Deaths,
      cRate: ele.attributes.CaseRate,
      hospital: ele.attributes.Hospitalizations
    }))
// console.log(insertData[0]);
    db.Coviddata.sync({force: true}).then(() => {
      db.Coviddata.bulkCreate(insertData)
        .then(() => console.log("added"))
    })
  }
})
