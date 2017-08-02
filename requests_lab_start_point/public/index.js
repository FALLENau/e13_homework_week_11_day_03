var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener('load', callback);

  request.open("GET", url);
  request.send();
}

var countries;
var regionCountries = [];

var requestComplete = function() {
  if (this.status !== 200) return;

  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  // populateList(countries);
}

var populateList = function() {

  var select = document.querySelector("#country-list");
  regionCountries.forEach(function(country) {
    var option = document.createElement("option");
    option.classList.add("country-option");
    option.innerText = country.name;
    option.value = regionCountries.indexOf(country);

    select.appendChild(option);
  });
}

var regionInfo = function() {
  var select = document.querySelector("#country-list");

  var countryOptions = document.querySelectorAll(".country-option");
  countryOptions.forEach(function(countryOption) {
    select.removeChild(countryOption);
  })
  regionCountries = [];
  var regionSelect = document.querySelector("#region-list");
  countries.forEach(function(country) {
    if (regionSelect.value === country.region) {
      regionCountries.push(country);
    }
  })


  populateList();
  select.addEventListener("change", countryInfo);

}



var countryInfo = function() {
  var ul = document.querySelector("#info-field");

  var allLiItems = document.querySelectorAll(".list-item");
    allLiItems.forEach(function(liItem) {
    ul.removeChild(liItem);
  })

  var bodyTag = document.querySelector("body");
  var borderCountry = document.querySelectorAll(".border-country");
  borderCountry.forEach(function(countryUl) {
    bodyTag.removeChild(countryUl);
  })

  var value = this.value;
  createLi("Country: " + regionCountries[value].name);
  createLi("Population: " + regionCountries[value].population);
  createLi("Capital: " + regionCountries[value].capital);

  initialize(regionCountries[value].latlng)

  getBorders(regionCountries[value]);

  saveCountry(regionCountries[value]);
}

var initialize = function(latlng) {
  // var obj = {lat:60.116667, lng:19.9 }
  var obj = {lat: latlng[0], lng: latlng[1] }

  var mainMap = new CountryMapPlugin(obj)
}

var CountryMapPlugin = function(obj) {
  var container = document.querySelector("#main-map")
  container = new google.maps.Map(container, {
    center: obj,
    zoom: 14
  });
}//Note here is the last leg of the map setup

var recreateInfo = function(country) {
  createLi("Country: " + country.name);
  createLi("Population: " + country.pop);
  createLi("Capital: " + country.capital);
}

var createLi = function(info) {
  var ul = document.querySelector("#info-field");
  var li = document.createElement("li");
  li.classList.add("list-item");
  li.innerText = info

  ul.appendChild(li);
}

var saveCountry = function(country) {
  favCountry = {
    name: country.name,
    pop: country.population,
    capital: country.capital
  };

  var jsonString = JSON.stringify(favCountry);
  localStorage.setItem("favCountry", jsonString);
}


var getBorders = function(country) {
  for (var borderCountry of country.borders) {
    var ul = document.createElement("ul");
    ul.classList.add("border-country");
    for (var place of countries) {
      if (borderCountry === place.alpha3Code) {
        borderInfo(place, ul);
      }
    }
    var bodyTag = document.querySelector("body");
    bodyTag.appendChild(ul);
  }
}

var borderInfo = function(country, ul) {
  var liName = document.createElement("li");
  liName.innerText = "Country: " + country.name;

  var liPop = document.createElement("li");
  liPop.innerText = "Population: " + country.population;

  var liCap = document.createElement("li");
  liCap.innerText = "Capital: " + country.capital;

  ul.appendChild(liName);
  ul.appendChild(liPop);
  ul.appendChild(liCap);
}


var app = function () {
  var jsonString = localStorage.getItem("favCountry");
  var favCountry = JSON.parse(jsonString) || [];
  recreateInfo(favCountry);

  var url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);

  var regionSelect = document.querySelector("#region-list");
  regionSelect.addEventListener("change", regionInfo);
}

window.addEventListener('load', app);
