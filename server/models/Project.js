const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  tech: [String],
  github: String,
  live: String,
  image: String
});

module.exports = mongoose.model('Project', projectSchema);
