var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connect();
      db.getQuery('DESCRIBE messages', [], function(error, results) {
        // console.log(error);
        // console.log(results);
      });


      db.disconnect();
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

