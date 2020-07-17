const db = require("../models");
const { Owners, Businesses, Changes, Restrictions, Days, sequelize } = require("../models");

const { response } = require("express");
const businesses = require("../models/businesses");
const coviddata = require("../models/coviddata");

Businesses.hasMany(Changes, {
  foreignKey: "BusinessId"
});
Changes.belongsTo(Businesses, {
  foreignKey: "BusinessId"
});

Businesses.hasMany(Restrictions, {
  foreignKey: "BusinessId"
});
Restrictions.belongsTo(Businesses, {
  foreignKey: "BusinessId"
});

Businesses.hasMany(Days, {
  foreignKey: "BusinessId"
});
Days.belongsTo(Businesses, {
  foreignKey: "BusinessId"
});

module.exports = function(app) {

  // *********************************************************
  // GET
  // *********************************************************

  app.get("/api/coviddata", function(req, res) {
    db.Coviddata.findAll({}).then(function(dbCoviddata) {
      res.json(dbCoviddata)
    });
  });


  // Covid data Totals
  app.get("/api/coviddatatotals", function(req, res) {
    db.Coviddata.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('cases')), 'total_cases'],
        [sequelize.fn('SUM', sequelize.col('deaths')), 'total_deaths'],
        [sequelize.fn('SUM', sequelize.col('cRate')), 'total_cRate'],
        [sequelize.fn('SUM', sequelize.col('hospital')), 'total_hospital'],
      ],
    }).then(function(dbCoviddata) {
      // })
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

  // GET route for getting one owner with all businesses
  app.get("/api/owners/:id", function(req, res) {
    let { id } = req.params;

    Owners.findByPk(id, {
      include: [
        {model: Businesses,
          require: true
        }]
    }).then((owners) => {
      if (owners) {
        res.json(owners);
      } else {
        res.status(404).send();
      }
      });
  });
  
  // GET route for getting all of the business data to be used client side
  app.get("/api/businesses", function(req, res) {
    db.Businesses.findAll({}).then(function(dbBusinesses) {
      res.json(dbBusinesses);
    });
  });

  // ** NOT WORKING GET route for getting one business
  app.get("/api/businesses/:id", function(req, res) {
    let { id } = req.params;

    Businesses.findByPk(id, {
    }).then((businesses) => {
      if (businesses) {
        res.json(businesses);
      } else {
        res.status(404).send();
      }
      });
  });

  // GET route for getting one businesses Info
  app.get("/api/businesses/info/:id", function(req, res) {
    let { id } = req.params;

    Businesses.findByPk(id, {
      include: [
        {model: Changes,
          require: true
        },
        {
        model: Restrictions
        },
      {
        model: Days
      }]
    }).then((businesses) => {
      if (businesses) {
        res.json(businesses);
      } else {
        res.status(404).send();
      }
      });
  });

  // GET route for getting one businesses Info
  app.get("/api/businessesbyc/:object_query", async (req, res) => {
    let object_query = req.params.object_query;
    db.Businesses.findAll({
      where: JSON.parse(object_query),
      // order: [["Businesses.name", "DESC"]]
      }).then(Businesses => {
          if (!Businesses.length) {
            return res.status(404).send();
      }
        res.send({
          Businesses
        });
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
      county: req.body.county,
      st: req.body.st,
      zip: req.body.zip,
      phone: req.body.phone,
      website: req.body.website,
      email: req.body.email,
      OwnerId: req.body.OwnerId
    }).then(function(dbBusinesses) {
      res.json(dbBusinesses);
    });
  });

  //POST to all tables by business ID
  app.post("/api/businesses/info/", function(req, res) {;
    console.log(req.body)
    db.Businesses.create({
      name: req.body.name,
      add1: req.body.add1,
      add2: req.body.add2,
      city: req.body.city,
      county: req.body.county,
      st: req.body.st,
      zip: req.body.zip,
      phone: req.body.phone,
      website: req.body.website,
      email: req.body.email,
      OwnerId: req.body.OwnerId
    }).then(dbBusinesses => {
      console.log(dbBusinesses.id)
        db.Changes.create({
        lStaff: req.body.Changes.lStaff,
        closed: req.body.Changes.closed,
        reopens: req.body.Changes.reopens,
        mAllowed: req.body.Changes.mAllowed,
        comments: req.body.Changes.comments,
        BusinessId: dbBusinesses.id
      }).then(dbChanges => {
          db.Restrictions.create({
          mask: req.body.Restriction.mask,
          distancing: req.body.Restriction.distancing,
          gloves: req.body.Restriction.gloves,
          hWashing: req.body.Restriction.hWashing,
          temp: req.body.Restriction.temp,
          cOut: req.body.Restriction.cOut,
          dThru: req.body.Restriction.dThru,
          lServices: req.body.Restriction.lServices,
          pSanitized: req.body.Restriction.pSanitized,
          tested: req.body.Restriction.tested,
          BusinessId: dbBusinesses.id
        }).then(dbRestrctions => {
            db.Days.create({
            day: req.body.Day.day,
            open: req.body.Day.open,
            close: req.body.Day.close,
            BusinessId: dbBusinesses.id
            }).then(function(dbDays) {
              res.json(dbDays);
            });
          })
        })
      })
    })

  // POST route for saving changes Info
  app.post("/api/changes", function(req, res) {
      db.Changes.create({
        lStaff: req.body.lStaff,
        closed: req.body.closed,
        reopens: req.body.reopens,
        allowed: req.body.allowed,
        comments: req.body.comments,
        BusinessId: req.body.BusinessId
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
        mask: req.body.mask,
        distancing: req.body.distancing,
        gloves: req.body.gloves,
        hWashing: req.body.hWashing,
        temp: req.body.temp,
        cOut: req.body.cOut,
        dThru: req.body.dThru,
        services: req.body.lServices,
        sanitized: req.body.pSanitized,
        tested: req.body.tested,
        change: req.body.ChangeId
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
