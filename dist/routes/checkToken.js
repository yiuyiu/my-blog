/**
 * Created by capri on 2017/8/4.
 */
/**
 * Created by capri on 2017/6/24.
 */
let express=require('express');
let bodyParser=require('body-parser');
let jwt=require('jwt-simple');
let config=require('config-lite')(__dirname);
let secret=config.secret;
let router=express.Router();
let User=require('../lib/mongo').User;
router.post('/',(req,res)=>{
  let token=req.headers.authorization;
  if (token) {
    try {
      let decoded = jwt.decode(token, secret);
      if(decoded.exp<=Date.now()){
        res.json({success:false,message:'过期了'})
      }
      User.getUserName(decoded.iss).then(userInfo=>{
        res.json(Object.assign({success:true},{userInfo}))
      })
      // handle token here

    } catch (err) {
      res.json({success:false,message:'token出错'})
    }
  } else {
    res.json({success:false,message:'token获取出错'})
  }
});
module.exports=router;
