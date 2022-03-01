const fs = require('fs');

const sendData = (res, data) => {
  return res.status(200).json(data);
};

const pretripList = async (req, res) => {
  const db = await fs.readFile('app_api/models/pretrip.json', (err, data) => {
    if (err) return console.error(err);
    sendData(res, JSON.parse(data));
  });
};

module.exports = {
  pretripList,
};
