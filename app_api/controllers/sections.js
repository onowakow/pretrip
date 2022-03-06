const mongoose = require('mongoose');
const sectionModel = mongoose.model('Section');
const staticLocalDb = require('../models/staticLocalDb');

const getSections = (req, res) => {
  const fields = req.query.fields;
  let selectString = '';

  if (fields) {
    selectString = fields.replace(',', ' ');
  }

  sectionModel
    .find()
    .select(selectString)
    .exec((err, sections) => {
      if (err) res.status(404).json({ message: 'sections not found' });
      return res.status(200).json(sections);
    });
};

const getSectionsCount = (req, res) => {
  sectionModel.count({}).exec((err, count) => {
    if (err) res.status(404).json({ message: 'sections not found' });
    return res.status(200).json(count);
  });
};

const getSectionByHumanID = (req, res) => {
  const ID = req.params.id;

  sectionModel.findOne({ ID: ID }).exec((err, section) => {
    if (err)
      return res.status(404).json({ message: 'No sections found by that ID' });
    return res.status(200).json(section);
  });
};

const getSectionByTitle = (req, res) => {
  const kebabSectionTitle = req.params.sectiontitle;
  const sectionTitle = kebabSectionTitle.split('-').join(' ');

  sectionModel.findOne({ title: sectionTitle }).exec((err, section) => {
    if (err) return res.status(404).json({ message: 'section not found' });
    return res.status(200).json(section);
  });
};

/*
const createSection = (req, res) => {
  const newSection = {
    title: req.body.title,
  };
  sectionModel.create(newSection).exec((err, newSection) => {
    if (err)
      return res.status(404).json({ message: 'Failed to create section' });
    return res.status(200).json(newSection);
  });
};
*/

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

module.exports = {
  getSections,
  getSectionByTitle,
  resetSections,
  getSectionByHumanID,
  getSectionsCount,
};
