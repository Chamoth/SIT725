const Form = require('../models/formModel');

// Render the contact form page
exports.renderFormPage = (req, res) => {
    res.render('formView', { title: 'Handcrafted Items by Chamoth' });
};

// Handle form submission
exports.submitForm = async (req, res) => {
    try {
        const { name, email, phone, query } = req.body; // Matching the fields in formModel
        const form = new Form({ name, email, phone, query });
        await form.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

