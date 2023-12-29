// src/controllers/authController.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { JWT_SECRET } = require('../../.env');

const RouterAuth = express.Router();

// Registration endpoint
RouterAuth.post('/register', async (req, res) => {
  try {
    // ... (unchanged)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login endpoint
RouterAuth.post('/login', async (req, res) => {
  try {
    // ... (unchanged)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { RouterAuth };
