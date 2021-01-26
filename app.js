const express = require('express');

const app = express();

const mongodb = require('./core/mongodb');

// data server
mongodb.connect();

//将路由文件引入
const route = require('./routes/index');

//初始化所有路由
route(app);


app.listen(3000, () => {
  console.log('app is running at port 3000');
});

module.exports = app;
