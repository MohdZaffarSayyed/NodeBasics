const express = require('express');
const app = express();
const PORT = 4000;
const data = require('./data');
const cors = require('cors'); // Import the CORS middleware

app.use(cors()); // Enable CORS for all routes

// Define a simple endpoint that returns data
app.get('/data', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
