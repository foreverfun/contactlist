var mongoose = require('mongoose');

// database structure
var clSchema = mongoose.Schema({
  name:String,
  email:String,
  phone:String
});

// collection: person
module.exports = mongoose.model('person', clSchema);