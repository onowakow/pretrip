const caseChange = require('../../utilities/caseChange');

const renderSectionTitlesPage = (req, res, responseBody) => {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = 'API lookup error. Failed to get sections.';
    responseBody = [];
  }
  const sections = responseBody;
  // sort by human-readable ID
  sections.sort((a, b) => (a.ID > b.ID ? 1 : -1));

  // const makeKebabTitle = (str) => str.replace(/\s+/g, '-').toLowerCase();

  /* Keep data on a need-to-know. This way if I change the model, I will only need to
    update the controller. The view knows nothing of the original data shape. */
  const viewData = sections.map((section) => {
    return {
      title: section.title,
      kebabTitle: caseChange.toKebabCase(section.title),
      _id: section._id,
      subsectionsLength: section.subsections.length,
    };
  });

  res.render('sectionTitlesPage', {
    viewData,
  });
};

const renderOneSectionPage = (req, res, responseBody) => {
  let message = null;
  if (!responseBody)
    return res.render('error', { message: 'Page not found.', status: 404 });

  const section = responseBody;
  res.render('section', {
    toKebab: caseChange.toKebabCase,
    sectionTitle: section.title,
    subsections: section.subsections,
    ID: section.ID,
  });
};

const renderSubsectionEdit = (req, res, responseBody) => {
  if (!responseBody)
    return res.render('error', { message: 'Page not found.', status: 404 });

  const subsection = responseBody;
  const sectionKebabTitle = responseBody.sectionTitle;
  const sectionTitle = caseChange.toSpacedLowerCase(sectionKebabTitle);

  res.render('subsectionEdit', {
    pageTitle: 'Editor',
    editorData: {
      subsection,
      sectionKebabTitle,
      sectionTitle,
    },
    /*
    sectionKebabTitle: sectionTitle,
    subsectionTitle: subsection.title,
    subsectionKebabTitle: caseChange.toKebabCase(subsection.title),
    components: subsection.components,
    _id: subsection._id,
    */
  });
};

const renderNotFoundError = (req, res) => {
  res.render('error', {
    message: 'Page not found',
    status: 404,
  });
};

module.exports = {
  renderSectionTitlesPage,
  renderOneSectionPage,
  renderSubsectionEdit,
  renderNotFoundError,
};
