var CL = require('../person.js');


// if no data is found, enter seeds
CL.find({}, function(err,results){
  if (results.length === 0) {
    new CL({
      name: 'Mike',
      phone: '111-111-1111',
      email: 'mike@test.com'
    }).save();
    new CL({
      name: 'John',
      phone: '222-222-2222',
      email: 'john@test.com'
    }).save();
    new CL({
      name: 'Steve',
      phone: '333-333-3333',
      email: 'steve@test.com'
    }).save();
  }
});