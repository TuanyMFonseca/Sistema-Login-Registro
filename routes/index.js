const express = require('express');
const router = express.Router();

//Welcome Page
router.get('/', (req, res) => res.render('welcome'));

//Ensure Authenticated Middleware
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Por favor, faça login para acessar esta página');
  res.redirect('/users/login');
}

//Dashboard Page
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard');
});

module.exports = router;