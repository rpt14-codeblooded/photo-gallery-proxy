var express = require('express');
var app = express();
var port = 3103;
var logger = require('morgan');
var parser = require('body-parser');
var path = require('path');


const dir = path.parse(__dirname).dir;

app.use(logger('dev'));
app.use(parser.urlencoded());
app.use(express.static(dir + '/public'));

app.use('/items/:id', express.static(dir + '/public'));


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})