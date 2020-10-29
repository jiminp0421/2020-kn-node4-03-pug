const mysql = require('mysql2/promise');
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASS,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

module.exports = {mysql, pool};