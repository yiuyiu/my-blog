/**
 * Created by capri on 2017/6/21.
 */
let mongoose=require('mongoose');
let config=require('config-lite')(__dirname);
mongoose.connect(config.mongoUrl);
// 取得用户模型，在其之上定义方法
let User=require('../models/users');
exports.User={
  create(user){
    new User(user).save(err=>{
      if(!err){
        console.log('success created')
      }
    })
  },
  isRegister(name){
    let bool;
    User.findOne({name:name}).then(userInfo=>{
         if(userInfo){bool=true;}else{
           bool=false;
         }
    })
    return bool;
  }
};
// http://www.cnblogs.com/woodk/p/6155955.html
