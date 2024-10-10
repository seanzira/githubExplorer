const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes'); // Import user routes

// Create an instance of an Express application
const app = express();

// Set the port to the value in the environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes and Helmet for securing the app by setting various HTTP headers
app.use(cors());
app.use(helmet());

// Use user routes
app.use('/api', userRoutes);

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
