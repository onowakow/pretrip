const titleToUrlFriendly = require('../../utilities/titleToUrlFriendly');
const request = require('request');
const {
  renderOneSectionPage,
  renderSectionTitlesPage,
  renderSubsectionEdit,
  renderNotFoundError,
} = require('./renderPretripPages');

// API OPTIONS
const apiOptions = {
  server: 'http://localhost:3000',
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'http://uwyobus.herokuapp.com';
}

// Call page renders
const sectionTitlesPage = (req, res) => {
  const path = '/api/sections';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    qs: { fields: 'title subsections ID' },
  };

  request(requestOptions, (err, { statusCode }, body) => {
    if (statusCode === 200) {
      console.log('GET sections successful');
    }

    renderSectionTitlesPage(req, res, body);
  });
};

// Same function as oneSectionPage but routes by human ID
const oneSectionPageById = (req, res) => {
  const id = req.params.id;
  const path = `/api/sections/id/${id}`;

  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };

  request(requestOptions, (err, { statusCode }, body) => {
    if (err) {
      console.log('Error:', err);
      return res.redirect('/notfound');
    }
    if (statusCode > 399) {
      console.log('Error status:', statusCode);
      return res.redirect('/notfound');
    }
    if (body === null) return res.redirect('/sections/');
    sectionTitle = titleToUrlFriendly(body.title);
    res.redirect(`/sections/${sectionTitle}`);
  });
};

const oneSectionPage = (req, res) => {
  const sectionTitle = req.params.sectiontitle;
  const path = `/api/sections/${sectionTitle}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, { statusCode }, body) => {
    if (statusCode === 200) {
      console.log('GET one section successful');
    }
    renderOneSectionPage(req, res, body);
  });
};

const subsectionEdit = (req, res) => {
  const sectionTitle = req.params.sectiontitle;
  const subsectionTitle = req.params.subsectiontitle;
  const path = `/api/sections/${sectionTitle}/${subsectionTitle}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, { statusCode }, body) => {
    if (statusCode === 200) {
      console.log('GET subsection successful');
    }
    // attach sectionTitle to body
    body.sectionTitle = sectionTitle;

    renderSubsectionEdit(req, res, body);
  });
};

const notFoundError = (req, res) => {
  renderNotFoundError(req, res);
};

const usersPage = (req, res) => {
  res.render('users', {
    server: apiOptions.server,
  });
};

module.exports = {
  sectionTitlesPage,
  oneSectionPage,
  oneSectionPageById,
  subsectionEdit,
  notFoundError,
  usersPage,
};
