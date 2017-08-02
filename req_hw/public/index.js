var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('GET', url)
  request.send()
}

var beers

var requestComplete = function() {
  if (this.status !== 200) return;

  var jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateList(beers)
}

var populateList = function() {

  var ul = document.querySelector("#info-field");
  // console.log(beers.name)
  beers.forEach(function(beer) {
    var li = document.createElement("li");
    li.classList.add("beer-item");
    li.innerText = beer.name;
    // beer.value = regionCountries.indexOf(country);

    ul.appendChild(li);
  });
}

var app = function () {
  // var jsonString = localStorage.getItem("favCountry");
  // var favCountry = JSON.parse(jsonString) || [];
  // recreateInfo(favCountry);

  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

  var beerSelect = document.querySelector("#beer-list");
  // beerSelect.addEventListener("change", beerInfo);
}


window.addEventListener('load', app);
