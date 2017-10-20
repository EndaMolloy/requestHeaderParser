var express = require('express')
var osName = require('os-name')

var app = express()

app.get('/api/whoami/', (req, res) => {

  var ipLocal = req.ip
  var lang = req.acceptsLanguages()
  var osPlat = osName()

  res.json({"ipaddress" : ipLocal, "language" : lang[1], "os" : osPlat})

})

app.listen(3000)
