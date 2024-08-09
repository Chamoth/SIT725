// var express = require("express");
// var router = express.Router();
// var Form = require("../models/Form");

// // Handle form submission
// router.post('/', function(req, res) {
//     console.log("Request body:", req.body); // Log the incoming data

//     const { name, email, phone, query } = req.body;

//     // Create a new form entry
//     const newForm = new Form({
//         name: name,
//         email: email,
//         phone: phone,
//         query: query
//     });

//     // Save the form entry to the database
//     newForm.save(function(err, savedForm) {
//         if (err) {
//             console.error("Error saving form data: ", err);
//             return res.status(500).json({ message: "Error saving form data" });
//         }
//         console.log("Saved form data:", savedForm); // Log saved data
//         res.status(200).json({ message: "Form data saved successfully!" });
//     });
// });

// module.exports = router;
