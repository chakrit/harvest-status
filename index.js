
var URL = 'http://harveststatus.com/status.json'
  , INTERVAL = 1000

var request = require('request')
  , log = console.log
  , spinCheck = function(e) {
    if (e) return log(e.message || e.stack)

    request(URL, function(e, resp, body) {
      body = JSON.parse(body)
      log(body.status + '\t' + body.last_response_time)
      setTimeout(spinCheck, INTERVAL)
    })
  }

spinCheck()

