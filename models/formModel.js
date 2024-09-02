const mongoose = require('mongoose');

// Define the Form schema
const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    query: { type: String, required: true }
});

// Create and export the Form model
const Form = mongoose.model('Form', formSchema);
module.exports = Form;
