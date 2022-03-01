const express = require('express');
const router = express.Router();
const ctrlPretrip = require('../controllers/pretrip');

router.route('/pretrip').get(ctrlPretrip.pretripList);

module.exports = router;
