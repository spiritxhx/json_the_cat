const request = require('request');

const args = process.argv.slice(2);
const fetchBreedDescription = (name, callback) => {

  let url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
  request(url, (error, respond, body) => {
    if (error) {
  
      return console.log(error);
    }
    if (body === "[]") {
      console.log(`${name} Not Found!`);
    } else {
      const data = JSON.parse(body);
      // console.log(typeof (data));
      // console.log(data[0].description);
      callback(error, data[0].description);
    }
  });
};

// fetchBreedDescription(args[0]);

module.exports = { fetchBreedDescription };