const Form = require('../models/formModel');

// Render the contact form page
exports.renderFormPage = (req, res) => {
    res.render('formView', { title: 'Handcrafted Items by Chamoth' });
};

// Handle form submission
exports.submitForm = async (req, res) => {
    const { name, email, phone, query } = req.body;
    
    try {
        const newForm = new Form({ name, email, phone, query });
        await newForm.save();
        res.status(200).json({ message: 'Form data saved successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Error saving form data' });
    }
};
