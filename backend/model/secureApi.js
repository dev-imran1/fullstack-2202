const sercureApi =(req,res,next)=>{
    console.log(req.headers)
    if(req.headers.authorization == "allksdflskflsk"){
        next(); 
    }else{
        res.send({error: "not valid way"})
    }
}

//51 minutes setup

module.exports = sercureApi

