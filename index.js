/*
 * @Author: jhl
 * @Date: 2021-08-24 15:50:18
 * @LastEditors: jhl
 * @LastEditTime: 2021-08-28 17:44:34
 * @Description:
 */
const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
apiMocker(app, path.resolve('./mocker/mocker.js'));

app.listen(5050);
