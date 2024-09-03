// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const mongoose = require('mongoose');
const formController = require('./controllers/formController'); // Import your formController

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://chamoxdev:Pohs4tZWCnRTPkFZ@sit725.xnkyh.mongodb.net/?retryWrites=true&w=majority&appName=SIT725';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Handle socket connection
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('submit-form', async (formData) => {
        console.log('Form data received:', formData);
        try {
            await formController.submitForm({ body: formData }, { status: () => ({ json: () => {} }) });
            socket.emit('form-response', { success: true, message: 'Form submitted successfully!' });
        } catch (error) {
            console.error('Error saving form data:', error);
            socket.emit('form-response', { success: false, message: 'An error occurred. Please try again.' });
        }
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
