const mongoose = require('mongoose');
const caseChange = require('../../utilities/caseChange');
const SectionModel = mongoose.model('Section');
const staticLocalDb = require('../models/staticLocalDb');
const ObjectId = mongoose.ObjectId;

const getSections = (req, res) => {
  const fields = req.query.fields;
  let selectString = '';

  if (fields) {
    selectString = fields.replace(',', ' ');
  }

  SectionModel.find()
    .select(selectString)
    .exec((err, sections) => {
      if (err) res.status(404).json(err);
      return res.status(200).json(sections);
    });
};

const getSectionsCount = (req, res) => {
  SectionModel.count({}).exec((err, count) => {
    if (err) res.status(404).json(err);
    return res.status(200).json(count);
  });
};

const getSectionByHumanID = (req, res) => {
  const id = req.params.id;

  // Error handling. Make sure ID is castable to a number
  const castableToNumber = (str) => {
    const test = Number(str);
    console.log(test);
    if (test === 'NaN') return false;
    return true;
  };
  if (!castableToNumber(id))
    return res.status(404).json({ message: 'id must be type number' });

  SectionModel.findOne({ ID: id }).exec((err, section) => {
    if (err) return res.status(404).json(err);
    // section = null if fineOne returns no section
    return res.status(200).json(section);
  });
};

const getSectionByTitle = async (req, res) => {
  const kebabSectionTitle = req.params.sectiontitle;
  try {
    const section = await SectionModel.findSectionByKebabTitle(
      kebabSectionTitle
    ).exec();
    return res.status(200).json(section);
  } catch (err) {
    return res.status(404).json(err);
  }
};

const getSubsection = async (req, res) => {
  const kebabSectionTitle = req.params.sectiontitle;
  const kebabSubsectionTitle = req.params.subsectiontitle;
  const dbSubsectionTitle = caseChange.toSpacedLowerCase(kebabSubsectionTitle);

  try {
    const section = await SectionModel.findSectionByKebabTitle(
      kebabSectionTitle
    ).exec();

    if (!section) return res.status(404).json({ message: 'Section not found' });

    const subsection = section.subsections.find(
      (subsection) => (subsection.title = dbSubsectionTitle)
    );

    if (!subsection)
      return res.status(404).json({ message: 'Subsection not found' });
    return res.status(200).json(subsection);
  } catch (err) {
    return res.status(404).json(err);
  }
};

const editComponent = async (req, res) => {
  const urlParams = {
    sectionTitle: req.params.sectiontitle,
    subsectionTitle: req.params.subsectiontitle,
    componentId: req.params.componentid,
  };

  const requestBody = {
    title: req.body.title,
    attributes: JSON.parse(req.body.attributes),
  };

  // Clean submitted attributes of empty attributes
  requestBody.attributes = requestBody.attributes.filter(
    (attribute) => attribute !== ''
  );

  try {
    const section = await SectionModel.findSectionByKebabTitle(
      urlParams.sectionTitle
    ).exec();

    if (!section) return res.status(404).json({ Error: 'section not found' });

    const formattedSubsectionTitle = caseChange.toSpacedLowerCase(
      urlParams.subsectionTitle
    );
    const subsection = section.subsections.find(
      (subsection) => subsection.title === formattedSubsectionTitle
    );
    const component = subsection.components.find((component) => {
      const stringyComponentId = component._id.toString();
      return stringyComponentId === urlParams.componentId;
    });
    component.attributes = requestBody.attributes;
    component.title = requestBody.title;

    await section.save();
    res.status(204).json(component);
  } catch (err) {
    res.status(404).json({ Error: err });
  }

  // res.status(200).json({ message: 'editComponent is live. Hooray!' });
};

/*
const createSection = (req, res) => {
  const newSection = {
    title: req.body.title,
  };
  SectionModel.create(newSection).exec((err, newSection) => {
    if (err)
      return res.status(404).json({ message: 'Failed to create section' });
    return res.status(200).json(newSection);
  });
};
*/

const resetSections = (req, res) => {
  const successResponse = {};

  SectionModel.deleteMany({}).exec((err, response) => {
    if (err)
      return res.status(404).json({ message: 'Failed to delete sections' });
    successResponse.deleteMany = 'Successfully deleted all section documents';
  });

  SectionModel.insertMany(staticLocalDb, (err, data) => {
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
  editComponent,
};
