const passport = require('passport')
module.exports.ensureAuthenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};
module.exports.login = (req, res, next) => {
  passport.authenticate('local', {
      successRedirect: '/main',
      failureRedirect: '/login',
      failureFlash: true
  })(req, res, next);
};