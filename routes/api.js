const express = require('express');
const router = express.Router();

// API routes for QR Code Generator
router.use('/qr-code', require('./api/qr-code'));


module.exports = router;