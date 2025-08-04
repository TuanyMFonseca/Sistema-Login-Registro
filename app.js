const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());  

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')[0] || '';
    res.locals.error_msg = req.flash('error_msg')[0] || '';
    res.locals.error = req.flash('error')[0] || '';
    next();
});

// Routes
app.use('/', require('./routes/index'));        
app.use('/users', require('./routes/users'));        

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

