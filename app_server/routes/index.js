var express = require('express');
var router = express.Router();

const ctrlSections = require('../controllers/sections');

/* GET home page. */
router.get('/', (req, res) => res.redirect('/sections'));

// A list of pre-trip sections
router.get('/sections', ctrlSections.sectionTitlesPage);

// A single pre-trip section (by title)
router.get('/sections/:sectiontitle', ctrlSections.oneSectionPage);
// Single pre-trip section (by human ID)
router.get('/sections/ID/:id', ctrlSections.oneSectionPageById);

// Edit page for entire section.
router.get(
  '/sections/:sectiontitle/:subsectiontitle/edit/',
  ctrlSections.subsectionEdit
);

module.exports = router;
