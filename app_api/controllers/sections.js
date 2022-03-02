const mongoose = require('mongoose');
const sectionModel = mongoose.model('Section');

const getSections = (req, res) => {
  sectionModel
    .find()
    .select('title subsections.length')
    .exec((err, sections) => {
      if (err) res.status(404).json({ message: 'sections not found' });
      return res.status(200).json(sections);
    });
};

const getSectionById = (req, res) => {
  sectionModel.findById(req.params.sectionid).exec((err, section) => {
    if (err) return res.status(404).json({ message: 'section not found' });
    return res.status(200).json(section);
  });
};

module.exports = { getSections, getSectionById };
