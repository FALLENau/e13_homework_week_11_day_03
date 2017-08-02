var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('GET', url)
  request.send()
}
