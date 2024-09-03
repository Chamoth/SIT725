// formController.js
const Form = require('../models/formModel');

// Handle form submission
exports.submitForm = async (req, res) => {
    try {
        // If using Socket.IO, `req.body` might not be present
        const { name, email, phone, query } = req.body || req; // Fallback to `req` if `req.body` is undefined
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
