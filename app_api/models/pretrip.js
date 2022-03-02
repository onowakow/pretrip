const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  attributes: [String],
});
const subsectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  components: [componentSchema],
});
const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subsections: [subsectionSchema],
});

mongoose.model('Section', sectionSchema);
