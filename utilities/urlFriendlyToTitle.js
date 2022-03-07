const urlFriendlyToTitle = (str) => {
  return str.split('-').join(' ').toLowerCase();
};

module.exports = urlFriendlyToTitle;
