/**
 * Created by capri on 2017/6/24.
 */
let express=require('express');
let bodyParser=require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
let jsonParser = bodyParser.json();
let router=express.Router();
let User=require('../lib/mongo').User;
router.post('/',jsonParser,(req,res)=>{
  User.getUserName(req.body.username).then(userInfo=>{
    res.send(userInfo)
  })
});
module.exports=router;
