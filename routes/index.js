var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/Account');
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'notebook App', user: req.user });
});

router.get('/register', function (req, res) {
  res.render('register', { title: 'notebook App Registration' });
});

router.post('/register', async function (req, res) {
  try {
    const user = await Account.findOne({ username: req.body.username }).exec();
    console.log('Success, redirect');
    if (user) {
      return res.render('register', {
        title: 'Registration',
        message: 'Existing User', account: req.body.username
      });
    }
    let newAccount = new Account({ username: req.body.username });
    const registeredUser = await Account.register(newAccount, req.body.password);
    console.log('Success, redirect');
    res.redirect('/');
  } catch (err) {
    console.error(err);
    return res.render('register', {
      title: 'Registration',
      message: 'Registration error', account: req.body.username
    });
  }
});

router.get('/login', function (req, res) {
  res.render('login', { title: 'notebook App Login', user: req.user });
});
router.post('/login', passport.authenticate('local'), function (req, res) {
  if (req.session.returnTo)
    res.redirect(req.session.returnTo);
  res.redirect('/');
});


router.get('/logout', function (req, res, next) { // use post or delete for better safety
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get('/ping', function (req, res) {
  res.status(200).send("pong!");
});