const Question=require('../models/question');

// To create Question
module.exports.createQuestion = function(req,res){
    Question.create(req.body, function(err, title){
        if(err){
            console.error(err);
            return  res.redirect('/')
        }
        return  res.json({title})
    })
}

// To get Question
module.exports.getQuestion = function(req,res){
    Question.findById(req.params.id).populate("options").exec(function(err,title){
        if(err){
        console.log(err);
        return  res.redirect('/');
        }
        return  res.json({
            title
        });
    })
}

// To delete Question
module.exports.deleteQuestion = function(req, res) {
    console.log(req.body);
    Question.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
        console.error(err);
        return res.redirect("/");
        } else {
        return res.json({data:{message:"Question deleted"}});
        }
    });
};
