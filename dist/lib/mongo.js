/**
 * Created by capri on 2017/6/21.
 */
let mongoose=require('mongoose');
let config=require('config-lite')(__dirname);
mongoose.connect(config.mongoUrl);
let User=require('../models/users');
exports.User={
  create(user){
    new User(user).save(err=>{
      if(!err){
        console.log('success created')
      }
    })
  }
};
// http://www.cnblogs.com/woodk/p/6155955.html
