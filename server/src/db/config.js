const mysql = require('mysql');//引入mysql
module.exports = { //公开该模块（以便其它模块使用）
  config: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'vue-ts-admin'
  },
  connect(option) {
    const {sql, cb} = option
    let conn = mysql.createConnection(this.config);
    conn.connect();
    conn.query(sql, cb);
    conn.end();
  }
}