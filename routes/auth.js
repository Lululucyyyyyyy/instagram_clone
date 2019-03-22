const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));


router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));

module.exports = router;
