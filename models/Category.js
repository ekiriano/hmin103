var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: { type: String, unique: true, lowercase: true},
  description : {type:String},
  exerpt:{type:String},
  image:{type:String}
});

module.exports = mongoose.model('Category', CategorySchema);
