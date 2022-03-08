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
    title: section.title,
    subsections: section.subsections,
    ID: section.ID,
  });
};

const renderSubsectionEdit = (req, res, responseBody) => {
  if (!responseBody)
    return res.render('error', { message: 'Page not found.', status: 404 });

  const subsection = responseBody;
  const sectionTitle = responseBody.sectionTitle;

  res.render('subsectionEdit', {
    pageTitle: 'Editor',
    sectionKebabTitle: sectionTitle,
    subsectionTitle: subsection.title,
    subsectionKebabTitle: caseChange.toKebabCase(subsection.title),
    components: subsection.components,
    _id: subsection._id,
  });
};

module.exports = {
  renderSectionTitlesPage,
  renderOneSectionPage,
  renderSubsectionEdit,
};
