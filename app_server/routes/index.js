var express = require('express');
var router = express.Router();

const ctrlSections = require('../controllers/sections');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// A list of pre-trip sections
router.get('/sections', ctrlSections.sectionTitlesPage);

// A single pre-trip section
router.get('/sections/:sectionid', ctrlSections.oneSection);

module.exports = router;
