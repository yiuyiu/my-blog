/**
 * Created by capri on 2017/6/22.
 */
let express=require('express');
let path=require('path');
let router=express.Router();
let multipart=require('connect-multiparty');
let User=require('../lib/mongo').User;
let setToken=require('../lib/auth').setToken;
router.post('/',multipart({
  uploadDir:'./public/img'//地址是相对于index.js所在的地方，估计是提交的时候才写入路径。
}),(req,res)=>{
  let name=req.body.username;
  let password=req.body.password;
  let sex=req.body.sex;
  let sign=req.body.signature;
  let avatar=req.files.avatar.path.split(path.sep).pop();
  let user={name,password,sex,sign,avatar};
  // 创建用户信息并且返回token
  User.create(user).save(err=>{
    if(err){
      res.send(err)
    }else{
      let obj=setToken(name);
      res.json(Object.assign({success:true},obj))
    }
  });

});
module.exports=router;
