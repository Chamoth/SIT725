import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import formRoutes from './routes/formRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// To get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { app as server };

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = 'mongodb+srv://chamoxdev:Pohs4tZWCnRTPkFZ@sit725.xnkyh.mongodb.net/?retryWrites=true&w=majority&appName=SIT725';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use(formRoutes);

// Sample API endpoint to add two numbers
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const sum = parseInt(a) + parseInt(b);
    res.json({ result: sum });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});