/**
* query.js
*
* An interface to the database for mail plugin.
*/
var mysql = require('mysql'),
    path = require('path'),
    q = require('q');

module.exports = function configure(cfg) {
  'use strict';

  // module to be exported
  var mod = {};

  // create a mysql connection
  var connection = mysql.createConnection({
    host:     cfg.db.host,
    user:     cfg.db.user,
    password: cfg.db.password,
    database: cfg.db.database
  });

  // provide a promise-based query interface
  mod.query = function query(sql, data) {
    var dfd = q.defer();

    connection.query(sql, data, function (err, res) {
      if (err) { dfd.reject(err); }
      dfd.resolve(res);
    });

    return dfd.promise;
  };

  return mod;
};
