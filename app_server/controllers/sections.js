const titleToUrlFriendly = require('../../utilities/titleToUrlFriendly');
const request = require('request');
const {
  renderOneSectionPage,
  renderSectionTitlesPage,
  renderSubsectionEdit,
} = require('./renderPretripPages');

// API OPTIONS
const apiOptions = {
  server: 'http://localhost:3000',
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'http://uwyobus.herokuapp.com';
}

// API REQUEST FNs
const requestOneSection = (sectionTitle, callback) => {
  const path = `/api/sections/${sectionTitle}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(requestOptions, callback);
};

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
  const ID = req.params.id;
  const path = `/api/sections/id/${ID}`;

  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };

  request(requestOptions, (err, { statusCode }, body) => {
    if (err) return console.log('No page by that id');
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

  /*
  const callback = (err, { statusCode }, body) => {
    if (statusCode === 200) {
      console.log('GET one section successful');
    }
    renderSubsectionEdit(req, res, body);
  };

  requestOneSection(sectionTitle, callback);
  */
};

module.exports = {
  sectionTitlesPage,
  oneSectionPage,
  oneSectionPageById,
  subsectionEdit,
};
