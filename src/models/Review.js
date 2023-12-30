// src/models/Review.js
const mongoose = require('../config/db');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String },
  image: { type: Buffer }, // Store image data as binary
  stars: { type: Number, min: 1, max: 5 },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
