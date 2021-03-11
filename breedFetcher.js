const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      let desc = "";
      if (data.length > 0) {
        desc = data[0].description;
        error = null;
      } else {
        desc = "";
        error = "no such breed";
      }
      callback(error, desc);
    } else {
      callback(error, null);
    }
  });
};

module.exports = {fetchBreedDescription};