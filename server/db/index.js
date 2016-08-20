var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'dog',
  database: 'chat'
});

exports.connect = function() {
  dbConnection.connect();
};

exports.getQuery = function(queryString, queryArgs, callback) {
  dbConnection.query(queryString, queryArgs, function(error, results) {
    callback(error, results);
  });
};

exports.disconnect = function() {
  dbConnection.end();
};

exports.insert = function() {


};