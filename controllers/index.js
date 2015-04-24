var CL = require('../models/person.js');

var indexController = {
	index: function(req, res) {
    CL.find({}, function(err,results){
      res.render('index');  
    })
	},
  viewAll: function(req,res) {
    CL.find({}, function(err,results){
      res.send(results);  
    })

  }
};

module.exports = indexController;