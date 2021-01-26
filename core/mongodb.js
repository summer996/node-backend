const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

// mongoose Promise
mongoose.Promise = global.Promise;

// mongoose
exports.mongoose = mongoose;

exports.connect = () => {

  // 连接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // 连接错误
  mongoose.connection.on('error', (error) => {
   console.log('数据库连接失败!');
  });

  // 连接成功
  mongoose.connection.once('open', () => {
    console.log('数据库连接成功!');
  });

  // // 自增 ID 初始化
  // autoIncrement.initialize(mongoose.connection);

  // 返回实例
  return mongoose;
};
