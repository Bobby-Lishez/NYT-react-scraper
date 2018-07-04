//Dependencies
const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

//initialization
const app = express(),
      PORT = process.env.PORT || 3001;

//parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//incorporate routes and static files
const routes = require('./routes');
app.use(routes);
app.use(express.static('client/build'));

//database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nyt-react-scraper');

//listener
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}!`);
})