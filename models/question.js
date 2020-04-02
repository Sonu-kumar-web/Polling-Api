//importing all the necessary files
const mongoose=require('mongoose');

// Creating Schema for Questions
const questionSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]
},{
    timestamps: true
});

const question=mongoose.model('question',questionSchema);
module.exports=question;
