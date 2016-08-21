var app = require('express')();
var models = require('../models');
var parser = require('body-parser');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(response) {
        res.send(JSON.parse(response));
        // res.writeHead(200, headers);
        // res.end(response);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      app.use(parser.json());
      models.messages.post(req.body, function() {
        // console.log(req.body);
        res.send('anythign');
        // res.writeHead(201, headers);
        // res.end('response text');
      });

    }, // a function which handles posting a message to the database
    options: function(req, res) {
      console.log('in options? options');
      res.writeHead(200, null);
      res.end();
    }

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('coming in here?');

    },
    post: function (req, res) {
      app.use(parser.json());
      models.users.post(req.body, function() {
        console.log(req.body);
        res.writeHead(201, headers);
        res.end();
      });

    }
  }
};

