var express = require('express')
var http = require('http')
var path = require('path')


var app = express();

app.set('views',__dirname,'/view');
app.set('view engine','jade');
app.use(express.static(path.join(__dirname,'HTML')));
var port = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.send('./HTML/index.html')
});
app.listen(port);
exports = module.exports = app;