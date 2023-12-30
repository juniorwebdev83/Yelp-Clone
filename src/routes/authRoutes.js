// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');

// Use the middleware in a route
router.get('/protected-route', authenticateUser, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Other authentication routes...

module.exports = router;
