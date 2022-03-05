const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subsection: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  attributes: [String],
});

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;
