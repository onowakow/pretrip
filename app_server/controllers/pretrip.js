const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000',
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'http://uwyobus.herokuapp.com';
}

const renderSectionTitlesPage = (req, res, responseBody) => {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = 'API lookup error. Failed to get sections.';
    responseBody = [];
  }
  res.render('sectionTitlesPage', {
    sectionTitles: responseBody,
  });
};

const renderOneSectionPage = (req, res, responseBody) => {
  let message = null;
  if (!responseBody.title) {
    message = 'API lookup error. Failed to get sections';
    responseBody = [];
  }
  res.render('section', {
    section: responseBody,
  });
};

const sectionTitles = (req, res) => {
  const path = '/api/sections';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, { statusCode }, titlesArray) => {
    if (statusCode === 200) {
      console.log('GET sections successful');
    }

    renderSectionTitlesPage(req, res, titlesArray);
  });
};

const oneSection = (req, res) => {
  const sectionId = req.params.sectionid;
  const path = `/api/sections/${sectionId}`;
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

module.exports = { sectionTitles, oneSection };
