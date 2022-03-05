var express = require('express');
var router = express.Router();

const ctrlPretrip = require('../controllers/pretrip');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// A list of pre-trip sections
router.get('/sections', ctrlPretrip.sectionTitles);

// A single pre-trip section
router.get('/sections/:sectionid', ctrlPretrip.oneSection);

module.exports = router;
