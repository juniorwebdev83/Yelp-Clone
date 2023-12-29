// src/routes/reviewRoutes.js
const express = require('express');
const ReviewRouter = express.Router();
const reviewController = require('../controllers/reviewController');

// Create a new review with an image
ReviewRouter.post('/reviews', reviewController.ReviewRouter);

module.exports = ReviewRouter;
