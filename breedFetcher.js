const request = require('request');

const args = process.argv.slice(2);
const breedFetcher = args => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;
  request(url, (error, respond, body) => {
    if (error) {
      return console.log(error);
    }
    if (body === "[]") {
      console.log(`${args[0]} Not Found!`);
    } else {
      const data = JSON.parse(body);
      console.log(typeof (data));
      console.log(data[0].description);
    }
  });
};

breedFetcher(args);