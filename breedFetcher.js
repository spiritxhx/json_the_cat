const request = require('request');

const args = process.argv.slice(2);
const fetchBreedDescription = (name, callback) => {
  let err, data;
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
  request(url, (error, respond, body) => {
    if (error) {
      return console.log(error);
    }
    if (body === "[]") {
      err = (`${name} Not Found!`);
      callback(err, "");
    } else {
      data = JSON.parse(body);
      callback(err, data[0].description);
    }
  });
};

// fetchBreedDescription(args[0]);

module.exports = { fetchBreedDescription };