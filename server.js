const dotenv = require('dotenv');
const path = require('path'); // Add this line
dotenv.config({ path: path.join(__dirname, 'src', '.env') });

const express = require('express');
const app = express();
const mongoose = require('./src/config/db'); // Adjust the import path
const cloudinary = require('./src/config/cloudinary');
const authRoutes = require('./src/routes/authRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api', reviewRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
