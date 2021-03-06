// local db option does not require mongoose
if (process.env.USE_LOCAL_DB === 'true') return;

const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  attributes: [String],
});

const subsectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  components: [componentSchema],
});
const sectionSchema = new mongoose.Schema({
  ID: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  subsections: [subsectionSchema],
});

// Statics are called on a model, while methods are called on a model instance.
sectionSchema.statics.findSectionByKebabTitle = function (kebabTitle) {
  const sectionTitle = kebabTitle.split('-').join(' ');
  return this.model('Section').findOne({ title: sectionTitle });
};

componentSchema.methods.hello = function () {
  console.log('hello!');
};

const Section = mongoose.model('Section', sectionSchema, 'sections');

module.exports = { Section };
