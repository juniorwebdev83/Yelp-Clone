// src/controllers/reviewController.js
const express = require('express');
const Review = require('../models/Review');
const cloudinary = require('../config/cloudinary');
const multer = require('multer');

const ReviewRouter = express.Router();

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create a new review with an image
ReviewRouter.post('/reviews', upload.single('image'), async (req, res) => {
  try {
    const { userId, text, stars } = req.body;

    // Check if an image is present in the request
    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const image = req.file.buffer; // Get image data from multer

    // You can upload the image to Cloudinary here if needed

    // Save the review to the database with the image data
    const newReview = new Review({
      userId,
      text,
      image,
      stars,
    });

    await newReview.save();

    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { ReviewRouter };
