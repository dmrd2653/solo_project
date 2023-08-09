const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const query = `SELECT * FROM travel_list`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get the bucket list', err);
      res.sendStatus(500)
    })});

router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
