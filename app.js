var express = require('express'),
    faker = require('faker'),
    app = express()

var port = process.env.PORT || 3000

app.get('/', function(req, res) {
  // console.log('homepage')
  // res.send(faker.name.findName())
  res.render('home.ejs')
})

app.listen(port, function() {
  console.log('server running')
})
