const app = require('./app');

const cors = require('cors');
app.use(cors());

// Define the port number (default is 3000)
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
