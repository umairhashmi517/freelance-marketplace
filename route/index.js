const express = require('express');
const router = new express.Router();

router.use("/project",require('./project.route'));
router.use("/user",require('./user.route'));
router.use("/bid",require('./bid.route'));

module.exports = router;