const Lcy = require('../models/user');

exports.addUser = (req, res) => {
  let { phone, name } = req.query;

  let message = new Lcy({
    name,
    phone,
  });

  message
    .save()
    .then((data) => {
      debugger;
      res.send('咋fasdfdaas啊啊');
      res.end('fssafasdfasfdd');
      return;
    })
    .catch((err) => {
      debugger;
      return;
    });
};
