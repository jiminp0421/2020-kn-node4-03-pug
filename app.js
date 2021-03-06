/* 전역변수 alt+shift+a */
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();



/* 전역변수 */
const memberRouter = require('./routes/member');
const sqlRouter = require('./routes/sql');
const sqlRouter2 = require('./routes/sql2');


/* 서버구동 */
app.listen(process.env.PORT, () => {console.log('http://127.0.0.1:3000')});

/* pug등록 */
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;


/* Router */
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', express.static(path.join(__dirname, './public'))); //절대경로로 넣어주기
app.use('/storage', express.static(path.join(__dirname, './uploads'))); //파일
app.use('/member', memberRouter);
app.use('/sql', sqlRouter);
app.use('/sql2', sqlRouter2);