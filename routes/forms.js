var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

// Define your schema and model
var formSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  password: String,
  email: String
});

var Form = mongoose.model("Form", formSchema);

// Submit a form
router.post("/", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    const form = await newForm.save();
    res.status(201).json(form);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
