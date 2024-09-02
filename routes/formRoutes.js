const express = require('express');
const router = express.Router();
const { renderFormPage, submitForm } = require('../controllers/formController');

// Route to render the form
router.get('/contact', (req, res) => {
  res.render('formView', { title: 'Contact Us' });
});

// Route to handle form submission
router.post('/submit-form', submitForm);

module.exports = router;
