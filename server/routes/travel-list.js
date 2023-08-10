const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM travel_list`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Failed to get the bucket list', err);
      res.sendStatus(500)
    })});

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  const addPlaceQuery = `
  INSERT INTO "travel_list" ("name", "location", "category", "notes")
  VALUES ($1, $2, $3, $4)`;
  pool.query(addPlaceQuery, [req.body.name, req.body.location, 
    req.body.category, req.body.notes])
    .then(() => {
      res.sendStatus(201);
    }).catch(err => {
      console.log('ERROR: failed to add new place', err);
      res.sendStatus(500)
    })
    
});

module.exports = router;
