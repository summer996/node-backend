const user = require('./user');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('咋啊啊');
    res.end('fssad');
  })

  app.get('/user', user.addUser);
}