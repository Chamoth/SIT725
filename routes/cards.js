var express = require('express');
var router = express.Router();
var Card = require('../models/Card');  // Make sure you have a Card model

router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();  // Fetch all cards from the database
    res.json(cards);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
