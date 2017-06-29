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
    return new User(user);
  },
  getUserName(name){
    return User.findOne({name:name})
  }
};
// http://www.cnblogs.com/woodk/p/6155955.html
