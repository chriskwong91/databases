var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {


      // var queryText = `
      //   SELECT m.message text, m.id objectId, r.name roomname, u.name username 
      //   FROM messages m

      //   INNER JOIN users u
      //   ON m.user_id = u.id
      //   INNER JOIN rooms r
      //   ON m.room_id = r.id

      //   ORDER BY m.id DESC;`;

      // db.getQuery(queryText, [], function(error, results) {
      //   var messages = results.slice(0, 100);
      //   var response = JSON.stringify({
      //     results: messages
      //   });

      //   callback(response);
      // });

    }, // a function which produces all the messages
    post: function (message, callback) {
      var user;
      console.log(message);
      db.Users.sync()
      .then(function() {
        return db.Users.create({
          name: message.username
        });
      }).catch(function() {
        return;
      })
      .then(function() {
        return db.Rooms.sync();
      })
      .then(function() {
        return db.Rooms.create({
          name: message.roomname
        });
      })
      .catch(function() {
        return;
      })
      .then(function() {
        return db.Messages.sync();
      })
      .then(function() {
        return db.Users.findAll({
          attributes: ['id'],
          where: {name: message.username}
        });
      }) 
      .then(function(userID) {
        user = userID[0].dataValues.id;
        return db.Rooms.findAll({
          attributes: ['id'],
          where: {name: message.roomname}
        });
      })
      .then(function(roomID) { 
        console.log('ROOM ID', roomID);
        db.Messages.create({
          message: message.text,
          room_id: roomID[0].dataValues.id,
          user_id: user
        });
      })
      .then(function() {
        return callback();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user, callback) {

    }
  }
};

