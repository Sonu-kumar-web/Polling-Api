//importing all the necessary files
const express=require('express');
const router=express.Router();

console.log('Router loaded');

// Setting router path
router.use('/options',require('./options'));
router.use('/questions',require('./questions'));

//exporting the router
module.exports=router;
