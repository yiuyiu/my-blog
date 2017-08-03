/**
 * Created by capri on 2017/6/27.
 */
let jwt=require('jwt-simple');
let config=require('config-lite')(__dirname);
let moment=require('moment');
let User=require('../lib/mongo').User;
let expires = moment().add('days', 7).valueOf();
let secret=config.secret;
exports.setToken=function (name) {
  let payload={
    iss:name,
    exp:expires
  };
   token = jwt.encode(payload, secret);
   return {
     token:token,
     expires:expires
   }
};
// 中间件
exports.checkToken=function (req,res,next) {
  let token=req.headers.authorization;
  if (token) {
    try {
      let decoded = jwt.decode(token, secret);
      if(decoded.exp<=Date.now()){
        res.json({success:false,message:'过期了'})
      }
      User.getUserName(decoded.iss).then(userInfo=>{
        console.log(111)
        res.json(Object.assign({success:true},{userInfo}))
        req.user=userInfo;
      })
      // handle token here

    } catch (err) {
      return next();
    }
  } else {
    next();
  }
};
