/**
 * Created by capri on 2017/6/19.
 */
let express=require('express');
let app=express();
var path=require('path');
// 这句话不加的话不能直接访问/下的Index.html
app.use(express.static(__dirname));
app.post('/xixi', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  res.json(req.userfile+'123');
});
let server=app.listen(3000,()=>{
  let host=server.address().address;
  let port=server.address().port;
  console.log('xixi')
});

