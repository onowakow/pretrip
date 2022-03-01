const fs = require('fs');

const virtualDatabase = () => {
  fs.readFile('app_api/models/pretrip.json', (err, data) => {
    if (err) return console.log(err);
    const object = JSON.parse(data);
    return object;
    console.log(JSON.parse(data));
  });
};

console.log(virtualDatabase());
console.log('readFile called');

module.exports = {
  virtualDatabase,
};
