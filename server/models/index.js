var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // var queryText1 = `
      //   INSERT INTO users (name)
      //   VALUES ('fdsas2');`;
      // var queryText2 = `
      //   INSERT rooms (name)
      //   VALUES ('qwers2');`;
      // var queryText3 = `
      //   INSERT messages (user_id, room_id, text)
      //   VALUES ((SELECT id FROM users WHERE name = 'fdsas2'), 
      //   (SELECT id FROM rooms WHERE name = 'qwers2'), 
      //   'this is a second message');`;

      // db.getQuery(queryText1, [], function() {});
      // db.getQuery(queryText2, [], function() {});
      // db.getQuery(queryText3, [], function() {});
      var queryText = `
        SELECT m.text text, r.name roomname, u.name username 
        FROM messages m

        INNER JOIN users u
        ON m.user_id = u.id
        INNER JOIN rooms r
        ON m.room_id = r.id

        ORDER BY m.id DESC
        ;`;

      db.getQuery(queryText, [], function(error, results) {
        var messages = results.slice(0, 100);
        var response = JSON.stringify({
          results: messages
        });

        callback(response);

        console.log(error);
        console.log(results);
      });

    }, // a function which produces all the messages
    post: function (message, callback) {
      var insertToUsers = `
        INSERT INTO users (name)
        VALUES (${message.username})
      `;
      var insertToRooms = `
        INSERT INTO rooms (name)
        VALUES (${message.roomname})
      `;
      var insertToMessages = `
        INSERT INTO messages (text)
        VALUES (${message.text})
      `;

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

