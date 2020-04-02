//importing all the necessary files
const Option=require('../models/option');
const Question=require('../models/question');

// To create Option
module.exports.createOption = function(req,res){
    Option.create(req.body, function(err, options){
        console.log('options',options);
        const questionId=req.params.id;
        options.link_to_vote=`http://localhost:8000/options/${options._id}/add_vote`
        Question.findById(questionId, function(err, question){
            console.log(question);
            
            question.options.push(options._id);
            question.save(function(err,question){
                if(err){
                    console.log('error');
                    return res.redirect('/');
                }
                console.log(question);
                
            })
        })
        
        if(err){

            console.error(err);
            return  res.redirect('/')
        }
        return  res.json({options})
    })
}

exports.add_vote= function(req, res){
    const vote=req.params.id;
    console.log(req.params);
    
    Option.findByIdAndUpdate(vote, {$inc: {votes:1}},{new:true}, function(err, option){
        if(err){

            console.error(err);
            return  res.redirect('/')
        }
        return  res.json({option})
    } )
}


// To delete options
module.exports.deleteOption = function(req, res) {
    console.log(req.body);
    Option.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
        console.error(err);
        return res.redirect("/");
        } else {
        return res.json({data:{message:"option deleted"}})
        }
    });
};
