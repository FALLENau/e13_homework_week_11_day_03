var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('GET', url)
  request.send()
}


var requestComplete = function() {
  if (this.status !== 200) return

  var jsonString = this.responseText
  var countries = JSON.parse(jsonString)
  populateList(countries)
}

var populateList = function(arrCountries) {
  var ul = document.querySelector("#country-list")
  countries.forEach(function(country) {
    document.createElement("li")
  })
}

var app = function () {
  var url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url, requestComplete)
}

window.addEventListener('load', app);
