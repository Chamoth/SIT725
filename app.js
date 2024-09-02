const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const formRoutes = require('./routes/formRoutes');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Other routes and middleware
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware to parse JSON data
app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

// Set up routes
app.use('/', formRoutes);

// MongoDB connection
const mongoURI = 'mongodb+srv://chamoxdev:Pohs4tZWCnRTPkFZ@sit725.xnkyh.mongodb.net/?retryWrites=true&w=majority&appName=SIT725';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Export the app for use in other modules, such as your test suite or server.js
module.exports = app;
