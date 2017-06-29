/**
 * Created by capri on 2017/6/24.
 */
import CommonHead from '../../components/Header.vue'
import ax from 'axios'
export default{
  data(){
    return {
      field:{
        name:'',
        password:'',
        respassword:'',
        sex:'',
        signature:'',
      },
      canRegister:true,
      blog:{
        title:'xixi',
        des:'haha'
      }
    }
  },
  components:{
    CommonHead
  },
  methods:{
    onSubmit(){
      if(!this.canRegister){
        return false;
      }
      let filesElement=this.$refs.fileType;
      let formData = new FormData();
// HTML 文件类型input，由用户选择
      formData.append("avatar", filesElement.files[0]);
      formData.append('username',this.field.name);
      formData.append('password',this.field.password);
      formData.append('sex',this.field.sex);
      formData.append('signature',this.field.signature);
      const headers={
        'Content-Type': 'multipart/form-data'
      };
      ax.post('http://localhost:3000/signUp',formData,{headers}).then(res=>{
         if(res.data.success){
           window.localStorage.setItem('token',res.data.token);
           this.$router.push('posts')
         }
      })
    },
    onblur(){
      let that=this;
      if(!this.field.name){
        return false;
      }
//          查看有无重复的
      ax.get('http://localhost:3000/isRegister', {
        params: {
          username: this.field.name
        }
      })
        .then(function (res) {
          if(res.data===true){
            alert('名字已经被注册')
          }
          that.canregister=false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
