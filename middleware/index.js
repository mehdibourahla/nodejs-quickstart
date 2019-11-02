var { check } = require('express-validator');
var middlewareObj = {};


middlewareObj.checkRegister = [
    check().not().isEmpty().withMessage('All fields are required'),
    check('username').isLength({max:20 }).withMessage('Username must be under 20 chars'),
    check('email').isEmail().withMessage('Please enter a valid email'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 chars long')
  ]
  middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        req.flash("danger","You need to be logged in first!");
        res.redirect("/login");
    }
}

middlewareObj.canLog = function(req,res,next){
    if(!req.isAuthenticated()){
        next();
    }
    else{
        req.flash("danger","You're not allowed to do that, Log out first!");
        res.redirect('/');
    }
}

module.exports = middlewareObj;