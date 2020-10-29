const express = require('express');
const router = express.Router();

/** mysql **/
const mysql      = require('mysql');
 connection = mysql.createConnection({
	host: 'localhost',
	user: 'jiminp0421',
	port: 3306,
	password: '000000', //깃에올라가면 패스워드가 그대로노출되니까 깃에 올리는 법 알려줄게..
	database: 'jiminp0421'
});

router.get('/create', (req, res, next) => {
	const pug = {title:"도서등록", scriptFile: ""}
	res.render('./book/create.pug', pug); //render는 pug를 html로
});

/* router.post('/save', (req, res, next) => {
	//console.log(req.body);
	//res.json(req.body);
	const {title, content, isbn, writer, wdate, price} = req.body;
	const sql = 	`INSERT INTO books SET
	title 	= '${title}',
	content = '${content}',
	isbn 		= '${isbn}',
	writer 	= '${writer}',
	wdate 	= '${wdate}',
	price 	= '${price}' `;
	//console.log(connection);

	connection.connect();
	connection.query(sql, (err, result, field) => {
		//console.log(err, result, field);
		//console.log(result[0].id);
		res.json(result); //데이터를 json으로
	});
	connection.end(); */

router.post('/save', (req, res, next) => {
	//console.log(req.body);
	//res.json(req.body);
	const {title, content, isbn, writer, wdate, price} = req.body;
	const sql = 	`INSERT INTO books SET title=?, content=?, isbn=?, writer=?, wdate=?, price=?`;
	const values = [title, content, isbn, writer, wdate, price];
	connection.connect();
	connection.query(sql, values, (err, result, field) => {
		if(result.serverStatus === 2) {
			const sql2 = `SELECT * FROM books ORDER BY id DESC`;
			connection.query(sql2, (err, result, field) => {
				res.json(result);
				connection.end();
			}); 
		}
		else connection.end();
	});
});

module.exports = router;
