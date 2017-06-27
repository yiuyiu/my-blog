/**
 * Created by capri on 2017/6/27.
 */
let jwt=require('jwt-simple');
let config=require('config-lite')(__dirname);
let moment=require('moment');
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
exports.checkToken=function (req,res,next) {
  var xixi="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InhpeCJ9.REwKvcXgvmAm07jLWPauyS4gFQFtf30drjpcOKTWvSQ"
  try{
    jwt.decode(xixi,secret)
  }catch (err){
    console.log(err)
    return
  }
};
