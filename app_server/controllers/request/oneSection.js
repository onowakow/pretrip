// MUST DEFINE REQUEST OPTIONS

const requestOneSection = (sectionTitle, callback) => {
  const path = `/api/sections/${sectionTitle}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(requestOptions, callback);
};

module.exports = requestOneSection;
