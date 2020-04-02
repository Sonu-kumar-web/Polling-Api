//importing all the necessary files
const mongoose=require('mongoose');

//Creating a connection to the database
mongoose.connect('mongodb://localhost/polling');

const db=mongoose.connection;

//if connection is not established then printing the error
db.on('error',console.error.bind(console,"error in connection to mongodb"));

//opening a connection to the database
db.once('open', () =>{
    console.log('Connected to database :: Mongodb');
});

// Exporting database
module.exports=db;