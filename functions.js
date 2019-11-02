var mongoose = require('mongoose');
var User = require('./models/user');
functions = {};

functions.deleteAllUsers = () => {
    User.deleteMany({},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("All records have been deleted");
        }
    });
}

module.exports = functions;