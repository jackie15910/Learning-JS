const fs = require('fs');

const sumFileData = function(filePath1, filePath2, callback) {
  fs.readFile(filePath1, 'utf8', (err, data1) => {
    if (err) {
      callback(err, null);
      return;
    }
    fs.readFile(filePath2, 'utf8', (err, data2) => {
      if (err) {
        callback(err, null);
        return;
      }
      const num1 = JSON.parse(data1);
      const num2 = JSON.parse(data2);
      const finalSum = num1 + num2;
      callback(null, finalSum);
    });
  });
};