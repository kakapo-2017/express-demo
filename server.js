var express = require('express')

var app = express()


// configuration (teach the server to do useful things)


app.get('/hello', function(req, res) {
  console.log('here is the request query', req.query)

  var name = req.query.name // chaining

  res.send('<h1>HELLO ' + name +'!</h1>') 
})

app.get('/profile/:id', function(req, res) {
  console.log(req.params)
  res.send('Here is the profile of ' + req.params)
})

module.exports = app

