var db = require('./db.js')
module.exports.handleSignup=(email,password)=>{
    //check if email already exists
    //save the user
    db.saveUser({email,password});
    //send the welcome email
    
};