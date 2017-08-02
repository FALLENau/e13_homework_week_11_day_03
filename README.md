# JavaScript Server Prac day3

JavaScript Objectives of day 3 week 11. \
-understand JSON \
-create our own api catcher \
-create and populate ul and li html Elements \
-populate page and your done with the first step \
-part 2 change 'onload' of page to be a clickable event\
-create button \
-move app functionality to the new makeApi function


## Getting Started

First use the startpoint.zip files to setup files, this will make a basic JS sever to experience console within chrome, and a  DOM sever template to start from.

### Prerequisites

NPM + node_module sever

```
$ npm install
```
to install requirements

```
npm start
```
to start up sever, which should be on localhost:3000

## Tips of debugging
```
function = function(event) {
  console.log(event)
}
```
this will display the event details within the Dev tools in browser

### JSON api catcher

```js
var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('GET', url)
  request.send()
}

var requestComplete = function() {
  console.log("Done baby doll")
}

var app = function () {
  var url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url, requestComplete)
}

window.addEventListener('load', app);
```
this when take the steps to collect the api dat from the URL

## JSON convert in api
change requestComplete to collect and convert the array api
```js
var requestComplete = function() {
  if (this.status !== 200) return

  var jsonString = this.responseText
  var countries = JSON.parse(jsonString)
  populateList(countries)
}
```
Then populate the list, to move towards displaying api array in a list
```js
var populateList = function(arrCountries) {
  console.log(arrCountries)
}
```

## JS create html elements
create ul and li elements to place api within

```js
var populateList = function(arrCountries) {
  var ul = document.querySelector("#country-list")
  arrCountries.forEach(function(country) {
    var li = document.createElement("li")
    li.innerText = country.name
    ul.appendChild(li)
  })
}
```
and you have a working 'onload' page, of country by api

### JSON change 'onload' to a clickable event
In the HTML create a button
```html
<button id='api-button'>Show me the world!</button>
```
create makeApi function and add the app functionality
```js
var makeApi = function() {
  var url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url, requestComplete)
}
```
then in app function change to
```js
var app = function () {
  var apiButton = document.querySelector('#api-button');
  apiButton.addEventListener('click', makeApi);
  // console.log(apiButton) //note:to test button is working
}
```

## JS

--
```html

```

--
```js

```
#alternatively you can make a js button then attach the function makeApi to it
```js
var makeButton = function() {
  var button = document.createElement("button")
  button.innerText("call api")
  var bodyTag = document.querySelector("body")
  bodyTag.appendChild(button)
}
```
--

## Deployment

can be use in current form

## Built With

* [atom](https://atom.io/) - the lightweight text editor
* [npm](https://www.npmjs.com/) - package manager for JavaScript

## Authors

* **Reece Jones**  - [lost-in-Code](https://github.com/lost-in-Code-au)

See also the list of [contributors](https://github.com/lost-in-Code-au/JS_sever_prac/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to google for allowing me to use there code
* Thanks to the instructors at Codeclan for your instruction
* Inspiration: Billy my cat making me work hate to bring home the cat food
* and my wife for just being her
