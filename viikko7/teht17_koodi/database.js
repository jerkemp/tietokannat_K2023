const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'netuser',
  password: 'netpass',
  database: 'test_db'
});
module.exports = connection;