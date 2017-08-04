/**
 * Created by capri on 2017/8/3.
 */
import api from './api'
import ax from 'axios'
export function checkToken() {
  return ax.post(api.checkToken);
}
export function signIn(username,password){
  return ax.post(api.signIn,{username,password})
}
export function create(author,title,content) {
  return ax.post(api.create,{author,title,content});
}
export function getPosts(user){
  return ax.get(api.getPosts,{params:user});
}
