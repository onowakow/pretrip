var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/playground', function (req, res, next) {
  res.render('playground', {
    title: 'Test',
    sectionTitles: [
      'Before you start',
      'Engine compartment',
      'Exterior',
      'Interior',
      "Driver's cab",
      'Air brakes',
      'Lights',
    ],
  });
});

module.exports = router;
