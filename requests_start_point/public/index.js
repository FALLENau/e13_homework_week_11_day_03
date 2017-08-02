var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.send()
}

request.addEventListener('load', callback)

var requestComplete = function() {
  console.log("Done baby doll")
}

var app = function () {
  var url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url, requestComplete)
}

window.addEventListener('load', app);
