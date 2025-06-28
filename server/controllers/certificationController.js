const Certification = require('../models/Certification');

exports.getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find();
    res.json(certs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch certifications' });
  }
};

exports.getCertificateById = async (req, res) => {
  try {
    const cert = await Certification.findById(req.params.id);
    if (!cert) return res.status(404).json({ message: 'Certificate not found' });
    res.json(cert);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching certificate' });
  }
};
