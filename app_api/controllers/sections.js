const mongoose = require('mongoose');
const urlFriendlyToTitle = require('../../utilities/urlFriendlyToTitle');
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

const getSectionByTitle = async (req, res) => {
  const kebabSectionTitle = req.params.sectiontitle;
  try {
    const section = await sectionModel
      .findSectionByKebabTitle(kebabSectionTitle)
      .exec();
    return res.status(200).json(section);
  } catch (err) {
    return res.status(404).json(err);
  }
};

// INCOMPLETE
const getSubsection = async (req, res) => {
  const kebabSectionTitle = req.params.sectiontitle;
  const kebabSubsectionTitle = req.params.subsectiontitle;

  try {
    const section = await sectionModel
      .findSectionByKebabTitle(kebabSectionTitle)
      .exec();
    // Now: we have section and we have a kebab subsection title.
    // Can we create a schema method which returns a subdocument?
    // section.findSubsectionByKebabTitle(kebabSectionTitle).exec()
  } catch (err) {
    return res.status(404).json(err);
  }

  /*
  sectionModel.findOne({ title: sectionTitle }).exec((err, section) => {
    if (err) return res.status(404).json({ message: 'section not found' });
  });

  res.status(200).json({ message: 'OK' });
  */
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
  getSubsection,
};
