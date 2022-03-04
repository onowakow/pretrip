const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  title: {
    type: String,
    required: true,
  },
  attributes: [String],
});
const subsectionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
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

const Section = mongoose.model('Section', sectionSchema, 'sections');

module.exports = { Section };
