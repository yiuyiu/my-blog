/**
 * Created by capri on 2017/6/22.
 */
let express=require('express')
let router=express.Router();
let User=require('../lib/mongo').User;
router.get('/',(req,res)=>{
 User.getUserName(req.query.username).exec((err,userInfo)=>{
   userInfo?res.send(true):res.send(false);
 });
});
module.exports=router;
