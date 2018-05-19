var config = {};
config.db = {};

config.phone = '+14242851118';
config.accountSid = 'AC0b56c1b6b1ff87e0caaf2c41ee5a7380';
config.authToken = 'd788a0bac58674a4efdd8fdb86c201a6';
config.doctorphone = '+60103934125';
 
config.db.type = 'mysql';
config.db.charset = 'utf8';
 
config.db.username = 'user';
config.db.password = 'pass';
config.db.host = 'localhost';
config.db.dbname = 'node_tests'; // DB name
 
config.db.users_tbl = 'users'; // table name
// config.db.another_tbl = 'next_table'; // ...

// export
module.exports = config;