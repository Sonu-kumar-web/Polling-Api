//importing all the necessary files
const express = require('express');
const router = express.Router();

// Setting controller path
const questionApi = require("../controllers/questions_controller");
const optionApi = require("../controllers/options_controller");

// Setting up all paths for controller
router.post('/create',questionApi.createQuestion);
router.use('/:id/options',require('./options'));
router.get('/:id',questionApi.getQuestion);
router.post('/:id/delete',questionApi.deleteQuestion);

// Exporting router
module.exports = router;