//importing all the necessary files
const express = require('express');
const router = express.Router({mergeParams: true});

// Setting controller path
const optionApi = require("../controllers/options_controller");

// Setting up all paths for controller
router.post('/create',optionApi.createOption);
router.get('/:id/add_vote',optionApi.add_vote);
router.post('/:id/delete',optionApi.deleteOption);

// Exporting router
module.exports = router;