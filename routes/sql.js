const express = require('express');
const router = express.Router();

/** mysql **/
const mysql      = require('mysql');
 connection = mysql.createConnection({
	host: 'localhost',
	user: '',
	port: 3306,
	password: '', //깃에올라가면 패스워드가 그대로노출되니까 깃에 올리는 법 알려줄게..
	database: ''
});

router.get('/create', (req, res, next) => {
	const pug = {title:"도서등록", scriptFile: ""}
	res.render('./book/create.pug', pug);
});

router.post('/save', (req, res, next) => {
	//console.log(req.body);
	//res.json(req.body);
	const {title, content, isbn, writer, wdate, price} = req.body;
	const sql = 	`INSERT INTO books SET
	title 	= '${title}',
	content = '${content}',
	isbn 		= '${isbn}',
	writer 	= '${writer}',
	wdate 	= '${wdate}',
	price 	= '${price}'
	`;
	//console.log(connection);

	connection.connect();
	connection.query(sql, (err, result, field) => {
		//console.log(err, result, field);
		//console.log(result[0].id);
		res.json(result);
	});
	connection.end();

});

module.exports = router;
