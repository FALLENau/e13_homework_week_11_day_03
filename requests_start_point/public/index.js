var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('GET', url)
  request.send()
}

var makeApi = function() {
  var url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url, requestComplete)
}

var requestComplete = function() {
  if (this.status !== 200) return

  var jsonString = this.responseText
  var countries = JSON.parse(jsonString)
  populateList(countries)
}

var populateList = function(arrCountries) {
  var ul = document.querySelector("#country-list")
  arrCountries.forEach(function(country) {
    var li = document.createElement("li")
    li.innerText = country.name
    ul.appendChild(li)
  })
}

var app = function () {
  var apiButton = document.querySelector('#api-button');
  apiButton.addEventListener('click', makeApi);
  // console.log(apiButton)
}

window.addEventListener('load', app);

// var makeButton = function() {
//   var button = document.createElement("button")
//   button.innerText("call api")
//   var bodyTag = document.querySelector("body")
//   bodyTag.appendChild(button)
// }
