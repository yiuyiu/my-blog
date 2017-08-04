/**
 * Created by capri on 2017/6/21.
 */
let mongoose=require('mongoose');
let config=require('config-lite')(__dirname);
mongoose.connect(config.mongoUrl);
// 取得用户模型，在其之上定义方法
let User=require('../models/users');
// 取得文章模型，在其之上定义方法
let Post=require('../models/posts');
exports.User={
  create(user){
    return new User(user);
  },
  getUserName(name){
    return User.findOne({name:name})
  },
  getUserById(_id){
    return User.findById(_id);
  }
};
exports.Post={
  create(post){
    return new Post(post);
  },
  getPost(user){
    let query={};
    if (user){query._id=user}
    return Post.find(query,null);
  }
}
// http://www.cnblogs.com/woodk/p/6155955.html
