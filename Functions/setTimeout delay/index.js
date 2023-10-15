const doShortly = function(callback, delay, data) {
  setTimeout(() => {
    callback(data);
  }, delay);
};