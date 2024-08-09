var express = require("express");
<<<<<<< HEAD
var app = express();

=======
var mongoose = require("mongoose");

var app = express();

>>>>>>> 7dcedbde7d572b96a624d6c461224bdd2f285204
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

<<<<<<< HEAD
var port = process.env.PORT || 3000;
=======
// Replace with your actual MongoDB URI
const uri = "mongodb+srv://chamoxdev:Pohs4tZWCnRTPkFZ@sit725.xnkyh.mongodb.net/?retryWrites=true&w=majority&appName=SIT725";
>>>>>>> 7dcedbde7d572b96a624d6c461224bdd2f285204

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
<<<<<<< HEAD
    console.log("App listening on port: " + port);
});
=======
  console.log("App listening to: " + port);
});

// Import routes
var cardRoutes = require('./routes/cards');
app.use('/api/cards', cardRoutes);

var formRoutes = require('./routes/forms');
app.use('/api/forms', formRoutes);
>>>>>>> 7dcedbde7d572b96a624d6c461224bdd2f285204
