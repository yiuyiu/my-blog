/**
 * Created by capri on 2017/6/19.
 */
let express=require('express');
let app=express();
let Router=require('./routes');
// 这句话不加的话不能直接访问/下的Index.html
app.use(express.static(__dirname));
Router(app);
let server=app.listen(3000,()=>{
  let host=server.address().address;
  let port=server.address().port;
  console.log('listening at 3000')
});

