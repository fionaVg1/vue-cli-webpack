<template>
  <div class="hello">
    <Logout></Logout>
    <h1>{{ msg }}</h1>
    <h2>您是否登录：{{isLoggedIn}}</h2>
    <h2>webpack跨域处理</h2>   
    <button @click="crossDomain">webpack跨域</button>
    <div class="info">{{info}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Logout from '@/components/Logout'
export default {
  name: 'HelloWorld',
  components:{
    Logout
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info:'',
    }
  },
  methods:{
    crossDomain:function(){
       this.axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .get('/jsonp')
      .then(response => (
        this.info = response
        ));
    }
  },
  computed:{
    ...mapState({
      isLoggedIn:'isLoggedIn'
    })
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
