/**
 * Created by capri on 2017/6/22.
 */
let express=require('express')
let router=express.Router();
let User=require('../lib/mongo').User;
router.get('/',(req,res)=>{
 let info=User.isRegister(req.query.username);
 console.log(info);
  res.send(info);
});
module.exports=router;
