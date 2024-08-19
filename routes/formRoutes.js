const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route to display the form page
router.get('/contact', formController.renderFormPage);

// Route to handle form submissions
router.post('/submit-form', formController.submitForm);

module.exports = router;
