const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'no token sent' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ messagae: 'token is invalid' });
    req.user = user;
    next();
  });
}

const ctrlSections = require('../controllers/sections');
const ctrlAuth = require('../controllers/authentication');

// '/sections' accepts query param 'fields'
router.route('/sections').get(ctrlSections.getSections);
router.route('/sections/about/count').get(ctrlSections.getSectionsCount);
router.route('/sections/id/:id').get(ctrlSections.getSectionByHumanID);
router.route('/sections/:sectiontitle').get(ctrlSections.getSectionByTitle);
router
  .route('/sections/:sectiontitle/:subsectiontitle')
  .get(ctrlSections.getSubsection);
router
  .route('/sections/:sectiontitle/:subsectiontitle/edit/:componentid')
  .post(authenticateToken, ctrlSections.editComponent);
router
  .route('/sections/reset')
  .post(authenticateToken, ctrlSections.resetSections);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
