const titleToUrlFriendly = require('../../utilities/titleToUrlFriendly');

/* This module makes calls to the API before calling the respective render function */
const request = require('request');
const {
  renderOneSectionPage,
  renderSectionTitlesPage,
} = require('./renderPretripPages');
const apiOptions = {
  server: 'http://localhost:3000',
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'http://uwyobus.herokuapp.com';
}

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

const playground = (req, res) => {
  const subsection = {
    _id: '6223c6a800dc8d253fc3207c',
    title: 'passenger side',
    components: [
      {
        title: 'hoses, clamps, and wires',
        attributes: ['secured and intact/undamaged'],
        _id: '6223c6a800dc8d253fc3207d',
      },
      {
        title: 'windshield wiper fluid',
        attributes: ['cap', 'level'],
        _id: '6223c6a800dc8d253fc3207e',
      },
      {
        title: 'air filter',
        attributes: [
          'air flow indicator',
          'reset air flow indicator',
          'secured and intact/undamaged',
          'unobstructed',
        ],
        _id: '6223c6a800dc8d253fc3207f',
      },
      {
        title: 'turbocharger',
        attributes: ['secured and intact/undamaged'],
        _id: '6223c6a800dc8d253fc32080',
      },
      {
        title: 'air conditioner compressor I',
        attributes: [
          'secured and intact/undamaged',
          'belt driven',
          'belt play less that 3/4"',
        ],
        _id: '6223c6a800dc8d253fc32081',
      },
      {
        title: 'alternator',
        attributes: [
          'secured and intact/undamaged',
          'belt driven',
          'belt play less that 3/4"',
        ],
        _id: '6223c6a800dc8d253fc32082',
      },
      {
        title: 'air conditioner compressor II',
        attributes: [
          'secured and intact/undamaged',
          'belt driven',
          'belt play less that 3/4"',
        ],
        _id: '6223c6a800dc8d253fc32083',
      },
      {
        title: 'water pump',
        attributes: [
          'secured and intact/undamaged',
          'belt driven',
          'belt play less that 3/4"',
        ],
        _id: '6223c6a800dc8d253fc32084',
      },
      {
        title: 'radiator fins',
        attributes: ['secured and intact/undamaged', 'unobstructed'],
        _id: '6223c6a800dc8d253fc32085',
      },
    ],
  };
  res.render('sectionEdit', {
    subsection: subsection,
    title: 'Editor',
  });
};

module.exports = {
  sectionTitlesPage,
  oneSectionPage,
  oneSectionPageById,
  playground,
};
