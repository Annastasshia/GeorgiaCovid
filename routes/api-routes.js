const db = require("../models");
const { Owners } = require("../models");
const changes = require("../models/changes");
const businesses = require("../models/businesses");

module.exports = function(app) {

  // *********************************************************
  // GET
  // *********************************************************
  //   Ad d Kelli's code****************************************
  app.get("/counties/:countyName", function(req, res) {
    db.WhateverDB.findAll({where: {countyName: req.params.countyName}})
      .then(dbResp => {
        res.render("county", dbResp[0])
      })
  })
  // Jon's code ***********************************************
  app.get("/api/coviddata", function(req, res) {
    db.Coviddata.findAll({}).then(function(dbCoviddata) {
      console.log(dbCoviddata)
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

  // GET route for getting all of the owners data to be used client side
  app.get("/api/owners", function(req, res) {
    db.Owners.findAll({}).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });

  // GET route for getting one owner
  app.get("/api/owners/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbOwners) {
        res.json(dbOwners);
      });
  });

  // GET route for getting all of the owners data with business data to be used client side
  app.get("/api/owners/business", (req, res) => {
    db.Owners.findAll({
      include: [
        {
          model: db.Businesses
        }
      ]
    }).then(dbOwners => {
      const resObj = dbOwners.map(owner => {
        return Object.assign(
          {},
          {
            name: owner.name,
            email: owner.email,
            businesses: owner.Businesses.map(businesses => {
              return Object.assign(
                {},
                {
                  b_name: businesses.name,
                  b_add1: businesses.add1
                }
              )
            })
          }
        )
      })
      res.json(resObj)
    });
  });
  
  // GET route for getting all of the business data to be used client side
  app.get("/api/businesses", function(req, res) {
    db.Businesses.findAll({}).then(function(dbBusinesses) {
      res.json(dbBusinesses);
    });
  });

  // GET route for getting one business
  app.get("/api/businesses/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBusinessess) {
        res.json(dbBusinesses);
      });
  });

  // GET route for getting all of the business data with associated data to be used client side
  app.get("/api/businesses/info", (req, res) => {
    db.Businesses.findAll({
      include: [
        {
          model: db.Changes,
            include: [
              {
                model: db.Restrictions
              }
            ]
        }
      ]
    }).then(dbBusinesses => {
      const resObj = dbBusinesses.map(businesses => {
        return Object.assign(
          {},
          {
            b_name: businesses.name,
            b_email: businesses.email,
            change: businesses.Changes.map(changes => {
              return Object.assign(
                {},
                {
                  // mask: restriction.mask,
                  // distancing: restriction.distancing,
                  // gloves: restriction.gloves,
                  // hWashing: restriction.hWashing,
                  // temp: restriction.temp,
                  // cOut: restriction.cOut,
                  // dThru: restriction.dThru,
                  // lServices: restriction.lServices
                  lStaff: changes.lStaff,
                  closed: changes.closed,
                  comments: changes.comments,
                  restrictions: changes.Restrictions.map(restrictions => {
                    return Object.assign(
                      {},
                      {
                        mask: restrictions.mask,
                        distancing: restrictions.distancing,
                        gloves: restrictions.gloves,
                        hWashing: restrictions.hWashing,
                        temp: restrictions.temp,
                        cOut: restrictions.cOut,
                        dThru: restrictions.dThru,
                        lServices: restrictions.lServices
                      }
                    )
                  })
                }
              )
            })
          }
        )
      });
      res.json(resObj)
    });
  });

  // *********************************************************
  // POSTS 
  // *********************************************************
    // POST route for saving a new Owner
    app.post("/api/owners", function(req, res) {
      console.log(req.body)
      db.Owners.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(function(dbOwners) {
        res.json(dbOwners);
      });
    });

  // POST route for saving a new business
  app.post("/api/businesses", function(req, res) {
    console.log(req.body);
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
      oId: req.body.OwnerId
    }).then(function(dbBusinesses) {
      res.json(dbBusinesses);
    });
  });

  // POST route for saving changes Info
  app.post("/api/changes", function(req, res) {
      db.Changes.create({
        Staff: req.body.lStaff,
        closed: req.body.closed,
        reopens: req.body.reopens,
        allowed: req.body.allowed,
        comments: req.body.comments,
        bId: req.body.BusinessId
      }).then(function(dbChanges) {
        res.json(dbChanges);
      });
    });

    // POST route for saving days Info
    app.post("/api/days", function(req, res) {
      db.Days.create({
        day: req.body.day,
        open: req.body.open,
        close: req.body.close,
        restriction: req.body.RestrictionId
      }).then(function(dbDays) {
        res.json(dbDays);
      });
    });

    // POST route for saving restrictions Info
    app.post("/api/restrictions", function(req, res) {
      db.Restrictions.create({
        mask: restrictions.mask,
        distancing: restrictions.distancing,
        gloves: restrictions.gloves,
        hWashing: restrictions.hWashing,
        temp: restrictions.temp,
        cOut: restrictions.cOut,
        dThru: restrictions.dThru,
        services: restrictions.lServices,
        sanitized: restrictions.pSanitized,
        tested: restrictions.tested,
        change: restrictions.ChangeId
      }).then(function(dbRestrictions) {
        res.json(dbRestrictions);
      });
    });

  // *********************************************************
  // UPDATE
  // *********************************************************
  // UPDATE for owners
  app.put("/api/owners", function(req, res) {
    db.Owners.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbOwners) {
        res.json(dbOwners);
      });
  });


  // UPDATE for business info
  app.put("/api/businesses", function(req, res) {
    db.Businesses.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbBusinesses) {
        res.json(dbBusinesses);
      });
  });

  // UPDATE for change info
  app.put("/api/changes", function(req, res) {
    db.Changes.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbChanges) {
        res.json(dbChanges);
      });
  });

  // UPDATE for days info
  app.put("/api/days", function(req, res) {
    db.Days.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbDays) {
        res.json(dbDays);
      });
  });

  // UPDATE for days info
  app.put("/api/restrictions", function(req, res) {
    db.Restrictions.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbRestrictions) {
        res.json(dbRestrictions);
      });
  });


};




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


