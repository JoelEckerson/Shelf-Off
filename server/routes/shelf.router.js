const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
  const query = `SELECT * FROM items;`
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get item details', err);
      res.sendStatus(500)
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  let insertItemString = `INSERT INTO "item" ("description", "image_url", "user_id")
  VALUES ($1, $2, $3)
  RETURNING "id";`
  pool.query(insertItemString, [req.body.description, req.body.image, req.body.user])
  .then(result => {
    console.log('Item Id:', result.rows[0].id); //ID IS HERE!
    
    const createdItemId = result.rows[0].id
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
