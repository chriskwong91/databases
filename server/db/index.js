var mysql = require('mysql');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var db = new Sequelize('chat', 'root', 'dog', {timezone: 'America/Los_Angeles'});
var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'dog',
  database: 'chat'
});

exports.Users = db.define('users', {
  name: {
    type: Sequelize.STRING,
    unique: 'uniqConstraintName'
  }
});

exports.Rooms = db.define('rooms', {
  name: {
    type: Sequelize.STRING,
    unique: 'uniqConstraintName'
  }
});

exports.Messages = db.define('messages', {
  message: Sequelize.STRING,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  room_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'rooms',
      key: 'id'
    }
  }
});

// exports.connect = function() {
//   dbConnection.connect();
// };

exports.getQuery = function(queryString, queryArgs, callback) {
  dbConnection.query(queryString, queryArgs, function(error, results) {
    callback(error, results);
  });
};

// exports.disconnect = function() {
//   dbConnection.end();
// };

// exports.insert = function() {


// };