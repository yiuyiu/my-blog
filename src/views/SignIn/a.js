/**
 * Created by capri on 2017/6/24.
 */
import CommonHead from '../../components/Header.vue'
import {singIn} from '../../service/service'
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
        console.log(this.$http)
      signIn(this.username,this.password).then(res=>{
         if(res.data.success){
           console.log(res)
           window.localStorage.setItem('token',res.data.token);
           this.$router.push('/')
         }
      })
    }
  }
}
