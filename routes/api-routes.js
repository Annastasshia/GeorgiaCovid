const db = require("../models");

module.exports = function(app) {

  // *********************************************************
  // GET
  // *********************************************************
  //   Add Kelli's code****************************************

  // Jon's code ***********************************************
  app.get("/api/coviddata", function(req, res) {
    db.Coviddata.findAll({}).then(function(dbCoviddata) {
      res.json(dbCoviddata);
    });
  });

  // GET route for getting all of the County data
  app.get("/api/counties", function(req, res) {
    db.Counties.findAll({}).then(function(dbCounties) {
      res.json(dbCounties);
    });
  });

  // GET route for getting all of the City data
  app.get("/api/cities", function(req, res) {
    db.Cities.findAll({}).then(function(dbCities) {
      res.json(dbCities);
    });
  });

  // GET route for getting all of the business data to be used client side
  app.get("/api/owners", function(req, res) {
    db.Owners.findAll({}).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });
  
  // GET route for getting all of the business data to be used client side
  app.get("/api/businesses", function(req, res) {
    db.Businesses.findAll({}).then(function(dbBusinesses) {
      res.json(dbBusinesses);
    });
  });


  // *********************************************************
  // POSTS 
  // *********************************************************
    // POST route for saving a new Owner
    app.post("/api/owners", function(req, res) {
      db.Owners.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(function(dbOwners) {
        res.json(dbOwners);
      });
    });

  // POST route for saving a new business
  app.post("/api/businesses", function(req, res) {
    db.Businesses.create({
      name: req.body.name,
      add1: req.body.add1,
      add2: req.body.add2,
      city: req.body.city,
      st: req.body.st,
      zip: req.body.zip,
      phone: req.body.phone,
      website: req.body.website,
      email: req.body.email,
      oId: req.body.passoId
    }).then(function(dbBusinesses) {
      res.json(dbBusinesses);
    });
  });

  // POST route for saving all business Info
  app.post("/api/owners", function(req, res) {
      db.Owners.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(function(dbOwners) {
        res.json(dbOwners);
      });
    });

  // *********************************************************
  // UPDATE
  // *********************************************************
  // UPDATE for owners

  // UPDATE for business info

  // UPDATE for all business info

  // *********************************************************
  // DELETE
  // *********************************************************
  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
//   app.delete("/api/todos/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    // db.Todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     });

//   });

}
