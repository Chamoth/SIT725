const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = 'mongodb+srv://chamoxdev:Pohs4tZWCnRTPkFZ@sit725.xnkyh.mongodb.net/?retryWrites=true&w=majority&appName=SIT725';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the Form model
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    query: String
});

const Form = mongoose.model('Form', formSchema);

// Define routes
app.post('/submit-form', async (req, res) => {
    const { name, email, phone, query } = req.body;
    
    try {
        const newForm = new Form({ name, email, phone, query });
        await newForm.save();
        res.status(200).json({ message: 'Form data saved successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Error saving form data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
