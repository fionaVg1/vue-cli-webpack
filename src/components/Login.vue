<template>
    <div id="login">
        <div>{{msg}}</div>
        <div>计算属性{{a}}</div>
        <button @click="login">login</button>
    </div>
</template>
<script>
import { store } from "../myStore";
export default {
  name: "Login",
  data(){
      return {
          msg:'',
      }
  },
  methods: {
    login: function() {
      this.$store.dispatch("login");
      this.$router.push({path: '/index'});
      this.ajaxTest();
    },    
    ajaxTest:function(){
        this.$('#login').css('border','1px solid gray');
    }
  },
  mounted(){
        this.bus.$on('changeDep',(msg)=>{
            this.msg = '由App.vue点击图片触发'+msg;
        })
  },
  computed:{
      a(){
          return store.a;
      }
  }
};
</script>
