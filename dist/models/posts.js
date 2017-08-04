/**
 * Created by capri on 2017/8/4.
 */
let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let postSchema=new Schema({
  author: {type:Schema.Types.ObjectId,ref:'User'},
  title: String,
  content: String,
  pv: Number
});
postSchema.index({author:1,_id:-1});
module.exports=mongoose.model('Post',postSchema);

