var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get();

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('coming in here?');

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
      console.log('coming in here?');

    }
  }
};

