const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./modules/user');

app.use(express.static('static'));
app.use(bodyParser.json()); // 解析 application/json
app.use(bodyParser.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded
app.use('/api/user', user);

module.exports = app;
