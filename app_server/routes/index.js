var express = require('express');
var router = express.Router();

let ctrlSections = require('../controllers/sections');

// For use of local "db" (Not a database, just a static model)
if (process.env.USE_LOCAL_DB === 'true') {
  console.log('Using local database');
  ctrlSections = require('../controllers/noDb/sections');
}

/* GET home page. */
router.get('/', (req, res) => res.redirect('/sections'));

router.get('/notfound', ctrlSections.notFoundError);

// A list of pre-trip sections
router.get('/sections', ctrlSections.sectionTitlesPage);

// A single pre-trip section (by title)
router.get('/sections/:sectiontitle', ctrlSections.oneSectionPage);
// Single pre-trip section (by human ID)
router.get('/sections/id/:id', ctrlSections.oneSectionPageById);

// Edit page for entire section.
router.get(
  '/sections/:sectiontitle/:subsectiontitle/edit/',
  ctrlSections.subsectionEdit
);

// user Login/register
router.get('/users', ctrlSections.usersPage);

module.exports = router;
