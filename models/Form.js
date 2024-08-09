var mongoose = require("mongoose");

var formSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    password: String,
    email: String
});

module.exports = mongoose.model("Form", formSchema);
