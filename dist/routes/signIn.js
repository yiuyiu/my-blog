/**
 * Created by capri on 2017/6/24.
 */
let express=require('express');
let bodyParser=require('body-parser');
let jsonParser = bodyParser.json();
let router=express.Router();
let setToken=require('../lib/auth').setToken;
let User=require('../lib/mongo').User;
let checkToken=require('../lib/auth').checkToken;
router.post('/',[checkToken,jsonParser],(req,res)=>{
  User.getUserName(req.body.username).then(userInfo=>{
    let obj=setToken(userInfo.name);
    if(obj&&userInfo.password===req.body.password)
    res.json(Object.assign({success:true,userInfo},obj))
  })
});
module.exports=router;
