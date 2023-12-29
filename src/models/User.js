// src/models/User.js
const mongoose = require('../config/db');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: { type: String },
  state: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
