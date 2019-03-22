const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/signup', passport.authenticate('local-signup'), (req, res, next) => {
  if (req.user) {
  	console.log('7');
    res.sendStatus(200);
  } else {
  	console.log('10');
    res.sendStatus(400);
  }
});

router.post('/signin', passport.authenticate('local-signin'), (req, res, next) => {
  if (req.user) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
