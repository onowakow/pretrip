const express = require('express');
const router = express.Router();

const ctrlSections = require('../controllers/sections');

router.route('/sections').get(ctrlSections.getSectionTitles);
router.route('/sections/:sectionid').get(ctrlSections.getSectionById);
router.route('/sections/reset').post(ctrlSections.resetComponents);
module.exports = router;
