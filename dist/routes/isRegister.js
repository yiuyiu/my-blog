/**
 * Created by capri on 2017/6/22.
 */
let express=require('express')
let router=express.Router();
router.get('/',(req,res)=>{
  console.log(req.body);
  res.send('123')
});
module.exports=router;
