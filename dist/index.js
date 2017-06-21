/**
 * Created by capri on 2017/6/19.
 */
let express=require('express');
let multipart=require('connect-multiparty');
let app=express();
let path=require('path');
// 这句话不加的话不能直接访问/下的Index.html
app.use(express.static(__dirname));
app.post('/signUp',multipart({
  uploadDir:'./public/img'
}),function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  console.log(req.files);
});
let server=app.listen(3000,()=>{
  let host=server.address().address;
  let port=server.address().port;
  console.log('listening at 3000')
});

