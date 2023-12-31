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
    })
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const info = `SELECT * FROM travel_list WHERE "id"=$1`;
  pool.query(info, [req.params.id])
    .then( result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('ERROR: Failed to get info', err);
      res.sendStatus(500)
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  const addPlaceQuery = `
  INSERT INTO travel_list ("name", "location", "category", "notes")
  VALUES ($1, $2, $3, $4)`;
  pool.query(addPlaceQuery, [req.body.name, req.body.location, 
    req.body.category, req.body.notes])
    .then(() => {
      res.sendStatus(201);
    }).catch(err => {
      console.log('ERROR: Failed to add new place', err);
      res.sendStatus(500)
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const editQuery = `UPDATE travel_list SET
  "name"=$1, "location"=$2, "category"=$3, "notes"=$4
  WHERE id=$5`;
  pool.query(editQuery, [req.body.name, req.body.location,
  req.body.category, req.body.notes, req.body.id])
    .then(() => {res.sendStatus(200);
    }).catch(err => {
      console.log('ERROR: Failed to edit selected values', err);
      res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const deleteQuery = `DELETE FROM travel_list WHERE id=$1`;
  pool.query(deleteQuery, [req.params.id])
    .then(() => {res.sendStatus(200);
    }).catch(err => {
      console.log('ERROR: Failed to delete selected place', err);
      res.sendStatus(500);
    })
});

module.exports = router;
