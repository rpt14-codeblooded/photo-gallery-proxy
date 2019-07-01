var express = require('express');
var app = express();
var port = 3103;
var logger = require('morgan');
var parser = require('body-parser');
var path = require('path');
var proxy = require('http-proxy-middleware')


const dir = path.parse(__dirname).dir;

app.use(logger('dev'));
app.use(parser.urlencoded());


app.use('/', proxy({ target: 'http://localhost:3003', changeOrigin: true }))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})