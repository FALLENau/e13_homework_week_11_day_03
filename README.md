# JavaScript Server Prac day3

JavaScript Objectives of day 3 week 11. \
-understand JSON \
- \
- \
- \
- \
-


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

## JS 

```js



```

### JS text-along text field

```js
var handleKeyPress = function() {
  var pTag = document.querySelector("#text-result")
  var input = document.querySelector("input")
  pTag.innerText = input.value
}

var app = function(){
var input = document.querySelector("input")
input.addEventListener("keyup", handleKeyPress)
}
```


### JS Dynamic drop down box

```js
var handleSelectChanged = function() {
  var pTag = document.querySelector("#select-result")
  pTag.innerText = this.value + " Excellent!"
}

var app = function(){
  var select = document.querySelector("select")
  select.addEventListener("change", handleSelectChanged)
}
```

## JS store data/Json conversion

in handleButtonClick function
```js
var jsonString = JSON.stringify(pet)

localStorage.setItem("pet", jsonString)
```
in app function
```js
var jsonString = localStorage.getItem("pet")

var pet = JSON.parse(jsonString)
```

## JS Googleapis maps

first setup google api in your HTML and add JS access, both go in the head
```html
<script src="http://maps.googleapis.com/maps/api/js"></script>
<script src="app.js"></script>
<script src="mapWrapper.js"></script>
```

implement app.js the activate the api
```js
var initialize = function() {
  var mainMap = new MapWrapper()
}

window.addEventListener("load", initialize)
```
in mapWrapper function
```js
var MapWrapper = function() {
  var container = document.querySelector("#main-map")
  this.googleMap = new google.maps.Map(container, {
    center: {lat:-38.3805969 , lng:144.8417823 },
    zoom: 14
  })
}
```
this was a practice with js api use, aimed at making functional use of google maps

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
