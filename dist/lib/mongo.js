/**
 * Created by capri on 2017/6/21.
 */
let mongoose=require('mongoose');
let config=require('config-lite')(__dirname);
mongoose.connect(config.mongoUrl)
// http://www.cnblogs.com/woodk/p/6155955.html
