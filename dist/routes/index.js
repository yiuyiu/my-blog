/**
 * Created by capri on 2017/6/22.
 */
module.exports=function (app) {
  app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  app.use('/signUp',require('./signUp'));
  app.use('/isRegister',require('./isRegister'))
};
