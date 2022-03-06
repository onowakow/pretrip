const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  algorithms: ['HS256'],
});

const ctrlSections = require('../controllers/sections');
const ctrlAuth = require('../controllers/authentication');

// '/sections' accepts query param 'fields'
router.route('/sections').get(ctrlSections.getSections);
router.route('/sections/about/count').get(ctrlSections.getSectionsCount);
router.route('/sections/:sectiontitle').get(ctrlSections.getSectionByTitle);
router.route('/sections/id/:id').get(ctrlSections.getSectionByHumanID);
router.route('/sections/reset').post(auth, ctrlSections.resetSections);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
module.exports = router;
