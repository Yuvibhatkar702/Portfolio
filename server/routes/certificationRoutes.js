const express = require('express');
const router = express.Router();
const {
  getCertifications,
  getCertificateById
} = require('../controllers/certificationController');

router.get('/', getCertifications);
router.get('/:id', getCertificateById); // ← new dynamic route

module.exports = router;
