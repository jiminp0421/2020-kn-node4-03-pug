const mysql = require('mysql2/promise');
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
	host: 'localhost',
	user: 'jiminp0421',
	database: 'jiminp0421',
	password: '000000',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

module.exports = {mysql, pool};