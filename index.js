
var URL = 'http://harveststatus.com/status.json'
  , INTERVAL = 1000

var request = require('request')
  , colors = require('colors') // infect String.prototype
  , log = console.log
  , spinCheck = function(e) {
    if (e) return log(e.message || e.stack)

    request(URL, function(e, resp, body) {
      body = JSON.parse(body)

      var status = body.status
      if (status === 'up') status = status.green
      else status = status.red

      log(status + '\t' + body.last_response_time)
      setTimeout(spinCheck, INTERVAL)
    })
  }

spinCheck()

