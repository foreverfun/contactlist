var CL = require('../models/person.js');

// database crud: add, view, upate, delete
var personController = {
  add: function(req, res) {
    // console.log(req.body);
    new CL(req.body).save(function(err,results){
      //res.render(results);
      res.json(results);
    });
  },
  delete: function(req,res) {
    // console.log(req.params.id);
    CL.remove({_id:req.params.id}, function(err,results){
      // console.log(results);
      // res.render(results);
      res.json(results);
    });
  },
  view: function(req, res) {
    CL.findOne({_id:req.params.id}, function(err,results){
      res.json(results);
    })
  },
  update: function(req,res) {
    CL.update({_id:req.params.id}, {$set:req.body}, function(err,results){
      res.json(results);
    });
  }

};


module.exports = personController;