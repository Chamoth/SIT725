import express from 'express';
const router = express.Router();
import * as formController from '../controllers/formController.js'; // Adjust import path if necessary

// Route to display the form page
router.get('/contact', formController.renderFormPage);

// Route to handle form submissions
router.post('/submit-form', formController.submitForm);

export default router;
