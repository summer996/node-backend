const { mongoose } = require('../core/mongodb.js');
// const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, default: '' },

  phone: { type: String, default: '' },
});

// messageSchema.plugin(autoIncrement.plugin, {
//   model: 'Message',
//   field: 'id',
//   start: 1,
//   incrementBy: 1
// })

module.exports = mongoose.model('user', userSchema);
