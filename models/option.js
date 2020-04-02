//importing all the necessary files
const mongoose=require('mongoose');

// Creating Schema for options
const optionSchema=new mongoose.Schema({
            text:{
                type: String,
                required: true
            },
            votes:{
                type:Number,
                required: true
            },
            link_to_vote:{
                    type: String,
                    require: true
            }
},{
    timestamps: true
});

const Option=mongoose.model('Option',optionSchema);

module.exports=Option;
