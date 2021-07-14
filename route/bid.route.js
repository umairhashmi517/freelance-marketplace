const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const bid = require('../controllers/bid.controller');

// display bids of user selected project
router.get("/bids/:id",auth.ensureAuthenticatedAdmin,bid.display);

//Get view page for bidding with project id
router.get("/:projectId",auth.ensureAuthenticatedAdmin,bid.render);

//bid creation for the project
router.post("/",auth.ensureAuthenticatedAdmin,bid.create);

// for acceptance of bid through bidder id 
router.get("/accept/:id",auth.ensureAuthenticatedAdmin,bid.accept);

module.exports = router;