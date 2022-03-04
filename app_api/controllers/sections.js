const mongoose = require('mongoose');
const sectionModel = mongoose.model('Section');
const staticLocalDb = require('../models/staticLocalDb');

const getSections = (req, res) => {
  sectionModel
    .find()
    .select('title subsections')
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

const resetSections = (req, res) => {
  const successResponse = {};
  sectionModel.deleteMany({}).exec((err, response) => {
    if (err)
      return res.status(404).json({ message: 'Failed to delete sections' });
    successResponse.deleteMany = 'Successfully deleted all section documents';
  });
  sectionModel.insertMany(staticLocalDb, (err, data) => {
    if (err)
      return res.status(404).json({ message: 'Failed to reset sections' });
    successResponse.insertMany =
      'Successfully repopulated all section documents';
    successResponse.data = data;
    return res.status(201).json(successResponse);
  });
};

module.exports = { getSections, getSectionById, resetSections };
