/**
 * Created by capri on 2017/6/27.
 */
let jwt=require('jwt-simple');
let config=require('config-lite')(__dirname);
let moment=require('moment');
let User=require('../lib/mongo').User;
let expires = moment().add('days', 7).valueOf();
let secret=config.secret;
exports.setToken=function (name) {
  let payload={
    iss:name,
    exp:expires
  };
   token = jwt.encode(payload, secret);
   return {
     token:token,
     expires:expires
   }
};

