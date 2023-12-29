// src/config/express.js
const express = require('express');
const expressFileUpload = require('express-fileupload');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(expressFileUpload());

module.exports = app;
