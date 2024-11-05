// src/app.js

// Import Express.js
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, welcome to my web application!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
