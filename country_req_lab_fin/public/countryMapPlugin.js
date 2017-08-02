// var initialize = function(latlng) {
//
//   // var Åland = {lat:60.116667, lng:19.9 }
//   var obj = {lat: latlng[0], lng: latlng[1] }
//
//   var mainMap = new MapWrapper(obj)
//
// //collect "latlng": [ 60.116667,19.9 ] for 'this.latlng' then conver to
// }

var MapWrapper = function(obj) {
  var container = document.querySelector("#main-map")
  this.googleMap = new google.maps.Map(container, {
    center: obj,
    zoom: 14
  })
}
var CountryMapPlugin = function(obj) {
  var container = document.querySelector(".main-map")
  this.googleMap = new google.maps.Map(container, {
    center: obj,
    zoom: 14
  })
}


// window.addEventListener("change", initialize)//note: change to on change event
