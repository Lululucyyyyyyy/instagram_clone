const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/signin');
}

router.get('/', function(req, res, next) {
  return res.render('index');
});

router.get('/dashboard', function(req, res, next){
	return res.render('index');
})

router.get('/photos', function(req, res, next) {
  return res.render('index');
});

router.get('/10', function(req, res, next){
	return res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('index');
});

router.get('/signin', (req, res, next) => {
  res.render('index');
});

module.exports = router;
