const express = require('express')
const mysql = require("mysql");
const router = express.Router()
router.get('/list', (req, res) => {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'vue-ts-admin'
  });
  connection.connect();
  connection.query('SELECT * from user', function (error, results, fields) {
    if (error) throw error;
    if (results) {
      res.send({
        code: 0,
        data: results,
        msg: ''
      })
    }
  });
})
module.exports = router