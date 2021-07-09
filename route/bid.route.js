const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const bid = require('../controllers/bid.controller');

// display bids of user selected project
router.get("/bids/:id",auth.ensureAuthenticatedAdmin,bid.display);

//Get view page for bidding
router.get("/bid/:id",auth.ensureAuthenticatedAdmin,bid.render);

//bid creation for the project
router.post("/bid",auth.ensureAuthenticatedAdmin,bid.create);

// router.post("/bid",auth.ensureAuthenticatedAdmin,bid.create);

module.exports = router;