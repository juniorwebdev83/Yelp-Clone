// src/middleware/authentication.js
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  // Your authentication logic here using JWT or any other method
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = authenticateUser;
