const express = require('express');
const router = express.Router();

const ctrlSections = require('../controllers/sections');

router.route('/sections').get(ctrlSections.getSections);
router.route('/sections/:sectionid').get(ctrlSections.getSectionById);
module.exports = router;
