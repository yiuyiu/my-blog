/**
 * Created by capri on 2017/8/4.
 */

let express=require('express');
let bodyParser=require('body-parser');
let jsonParser = bodyParser.json();
let router=express.Router();
let Post=require('../lib/mongo').Post;
let User=require('../lib/mongo').User;
// 查看
router.get('/',(req,res)=>{
Post.getPost().exec((err,posts)=>{
  if(!err){
    let arr=posts;
    arr.forEach((post)=>{
      User.getUserById(post.author).exec((err,user)=>{
        let obj=user;
        post.user=obj;
        console.log(post)
      })
    })
    res.json({success:true,message:posts})
  }
})
});
// 创建Post
router.post('/create',[jsonParser],(req,res)=>{
  let post=Object.assign(req.body,{pv:0});
  Post.create(post).save(err=>{
    if(err){
      res.send(err)
    }else{
      res.json({success:true})
    }
  })
  // User.getUserName(req.body.username).then(userInfo=>{
  //   if(userInfo){
  //     let obj=setToken(userInfo.name);
  //     if(userInfo.password===req.body.password){
  //       res.json(Object.assign({success:true,userInfo},obj))
  //     }else{
  //       res.json({success:false})
  //     }
  //   }
  //   if(!userInfo){
  //     res.json({success:false})
  //   }
  //
  // })
});
module.exports=router;
