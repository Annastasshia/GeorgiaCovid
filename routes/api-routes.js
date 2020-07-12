
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the Covid Data
  //   Add Kelli's code****************************************

  // Jon's code ***********************************************
    app.get("/api/Coviddata", function(req, res) {
      db.Coviddata.findAll({}).then(function(dbCoviddata) {
        // We have access to the Coviddata as an argument inside of the callback function
        res.json(dbCoviddata);
      });
    });

  // GET route for getting all of the County data
  app.get("/api/County", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.County.findAll({}).then(function(dbCounty) {
        res.json(dbCounty);
      });
    });

    // GET route for getting all of the City data
  app.get("/api/City", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.City.findAll({}).then(function(dbCity) {
      res.json(dbCity);
    });
  });

  // GET route for getting all of the business data to be used client side
  app.get("/api/business", function(req, res) {
    db.business.findAll({}).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  // POST route for saving a new business
  app.post("/api/business", function(req, res) {
    db.Business.create({
      // need to map fields
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

    // POST route for saving a new Owner
    app.post("/api/todos", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Todo.create({
          text: req.body.text,
          complete: req.body.complete
        }).then(function(dbTodo) {
          // We have access to the new todo as an argument inside of the callback function
          res.json(dbTodo);
        });
      });

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

  // PUT route for updating business data. We can get the updated business data from req.body
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });



  // PUT route for updating covid data. 
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};
