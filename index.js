
var URL = 'http://harveststatus.com/status.json'
  , INTERVAL = 1000

var request = require('request')
  , colors = require('colors') // infect String.prototype
  , log = console.log

  , spinCheck = function() {
    request(URL, function(e, resp, body) {
      if (e) return log(e.message || e.stack)
      body = JSON.parse(body)

      var status = body.status
      status = (status === 'up') ? status.green : status.red

      log(status + '\t' + body.last_response_time)
      setTimeout(spinCheck, INTERVAL)
    })
  }

module.exports = spinCheck()

