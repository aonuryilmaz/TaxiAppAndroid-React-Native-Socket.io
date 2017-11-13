var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://onur:1234@ds159254.mlab.com:59254/taxiapp',['drivers']);

//get single driver
router.get('/driver/:id',function(req,res,next){
    db.drivers.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,driver){
        if(err){
            res.send(err);
        }
        res.send(driver);
    });
});

module.exports=router;