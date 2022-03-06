const express = require('express');
const router = express.Router();

const ctrlSections = require('../controllers/sections');

// '/sections' accepts query param 'fields'
router.route('/sections').get(ctrlSections.getSections);
router.route('/sections/about/count').get(ctrlSections.getSectionsCount);
router.route('/sections/:sectiontitle').get(ctrlSections.getSectionByTitle);
router.route('/sections/id/:id').get(ctrlSections.getSectionByHumanID);
router.route('/sections/reset').post(ctrlSections.resetSections);
module.exports = router;
