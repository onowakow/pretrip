const toKebabCase = (str) => str.replace(/\s+/g, '-').toLowerCase();
const toSpacedLowerCase = (str) => {
  return str.split('-').join(' ').toLowerCase();
};

module.exports = { toKebabCase, toSpacedLowerCase };
