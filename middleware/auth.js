const passport = require('passport')
module.exports.ensureAuthenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/user/login');
  }
};
module.exports.login = (req, res, next) => {
  passport.authenticate('local', {
      successRedirect: '/user/main',
      failureRedirect: '/user/login',
      failureFlash: true
  })(req, res, next);
};