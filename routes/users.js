const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//User model
const User = require('../models/User');


// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', (req,res) => {
    const{name, email, password, password2} = req.body;
    let errors = [];

    // Check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please Fill All The Fields'});
    }

    // Check Passwords Match
    if(password !== password2){
        errors.push({msg: 'Passwords Do Not Match'});
    }

    // Check Password Length
    if(password.length < 6){
        errors.push({msg: 'Password Should Be At Least 6 Characters'});
    }

    if (errors.length > 0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
    }else {
        // Validation Passed
        User.findOne({email: email })
        .then(user =>{
            if(user){
                // User Exists
                errors.push({msg: 'Email Already Registered'});
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });

                // Hash Password
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if(err) throw err;
                        // Set Password to Hashed
                        newUser.password = hash;
                        // Save User
                        newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can log in');
                            res.redirect('/users/login');
                        })
                        .catch(err => console.log(err));
                    })
                );
            }
        }); 
    }
}); 

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: {type: 'error_msg'}
  })(req, res, next);
});


module.exports = router;