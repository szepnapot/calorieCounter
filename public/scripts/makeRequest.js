const ajax = (function() {
  'use strict';

  const host = 'http://localhost:3000/meals';

  function makeRequest(method, url, data, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, host + url);
    xhr.setRequestHeader("content-type",'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.onload = function() {
      if ( xhr.readyState === 4) {
        if ( xhr.status !== 200) {
          cb(xhr.status, null);
          return;
        }
        cb(null, JSON.parse(xhr.responseText));
      }
    }
    xhr.send(data && JSON.stringify(data));
  }

  return {
    makeRequest: makeRequest
  };
})();
