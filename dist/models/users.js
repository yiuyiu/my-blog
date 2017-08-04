/**
 * Created by capri on 2017/6/21.
 */
let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let userSchema=new Schema({
  name:{type:String,unique:true},
  password:String,
  sex:String,
  avatar:String,
  sign:String
});
userSchema.index({name:1});
module.exports=mongoose.model('User',userSchema);

