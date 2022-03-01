var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/playground', function (req, res, next) {
  res.render('playground', { title: 'Test' });
});

module.exports = router;
