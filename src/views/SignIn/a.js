/**
 * Created by capri on 2017/6/24.
 */
import CommonHead from '../../components/Header.vue'
export default{
  data(){
    return{
      username:'',
      password:'',
      blog:{
        title:'xixi',
        des:'haha'
      }
    }
  },
  created(){
    console.log(this.$route)
  },
  components:{
    CommonHead
  },
  methods:{
    onSubmit(){
      // const headers={
      //   'Content-Type': 'application/json'
      // };
      this.$http.post('http://localhost:3000/signIn',{
        username:this.username
      }).then(res=>{
        console.log(res)
         if(res.data.success){
           window.localStorage.setItem('token',res.data.token);
         }
      })
    }
  }
}
