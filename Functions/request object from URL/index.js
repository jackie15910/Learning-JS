const request = require('request');
const fetchDataForUser = function(url, username, callback) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const jsonObject = JSON.parse(body);
      if (jsonObject.users[username]) {
        callback(null, jsonObject.users[username]);
      } else {
        callback(null, undefined);
      }
    }
  });
};