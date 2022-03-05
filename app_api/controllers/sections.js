// const mongoose = require('mongoose');
const componentModel = require('../models/componentSchemaDef');
const staticLocalDb = require('../models/staticLocalDb');

const getSectionTitles = (req, res) => {
  componentModel
    .find()
    .select('section')
    .exec((err, components) => {
      if (err) res.status(404).json({ message: 'sections not found' });

      // returns [_id: xxx, section: string]. Reduce repeats
      let titles = [];
      components.forEach((component) => {
        if (titles.indexOf(component.section) !== -1) return;
        titles.push(component.section);
      });

      if (titles.length < 1)
        return res.status(404).json({ message: 'section titles not found' });
      return res.status(200).json(titles);
    });
};

const getSectionById = (req, res) => {
  sectionModel.findById(req.params.sectionid).exec((err, section) => {
    if (err) return res.status(404).json({ message: 'section not found' });
    return res.status(200).json(section);
  });
};

const resetComponents = (req, res) => {
  const successResponse = {};
  componentModel.deleteMany({}).exec((err, response) => {
    if (err)
      return res.status(404).json({ message: 'Failed to delete components' });
    successResponse.deleteMany = 'Successfully deleted all component documents';
  });
  componentModel.insertMany(staticLocalDb, (err, data) => {
    if (err)
      return res.status(404).json({ message: 'Failed to reset components' });
    successResponse.insertMany =
      'Successfully repopulated all component documents';
    successResponse.data = data;
    return res.status(201).json(successResponse);
  });
};

module.exports = { getSectionTitles, getSectionById, resetComponents };
