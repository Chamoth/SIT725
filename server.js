var express = require("express");
var mongoose = require("mongoose");

var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Replace with your actual MongoDB URI
const uri = "mongodb+srv://chamoxdev:Pohs4tZWCnRTPkFZ@sit725.xnkyh.mongodb.net/?retryWrites=true&w=majority&appName=SIT725";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB successfully!");
});

mongoose.connection.on('error', (err) => {
  console.error("MongoDB connection error: ", err);
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});

// Import routes
var cardRoutes = require('./routes/cards');
app.use('/api/cards', cardRoutes);

var formRoutes = require('./routes/forms');
app.use('/api/forms', formRoutes);
