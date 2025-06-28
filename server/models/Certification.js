const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: String,
  provider: String,
  link: String
});

module.exports = mongoose.model('Certification', certificationSchema);
