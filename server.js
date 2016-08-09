var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'views')));


app.set('view engine', 'ejs');
//Sets the view engine to ejs for partials


app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/equipment', function(req, res) {
    res.render('equipment.ejs');
})

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.ejs'));
// });





















app.listen(1337, function () {
  console.log("1337 Up and Running Sir!");
});
