<template>
  <div class="hello">
    <Logout></Logout>
    <h1>{{ msg }}</h1>
    <h2>您是否登录：{{isLoggedIn}}</h2>
    <h2>webpack跨域处理</h2>   
    <div>我是通过vuex模块拆分动态引入的{{$store.state}}</div>
    <button @click="crossDomain">webpack跨域</button>
    <button @click="read">读</button>
    <div class="readInfo">{{readInfo}}</div>
    <div class="info">{{info}}</div>
    <Math></Math>
  </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import Logout from '@/components/Logout'
    import Math from '@/components/math'
    export default {
        name: 'HelloWorld',
        isVuex: true,
        components: {
            Logout,
            Math
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                info: '',
                readInfo: '未读',
            }
        },
        methods: {
            crossDomain: function() {
                this.axios
                    // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .get('/jsonp')
                    .then(response => (
                        this.info = response
                    ));
            },
            read: function() {
                this.readInfo = '已读';
            }
        },
        computed: {
            ...mapState({
                isLoggedIn: 'isLoggedIn',
                number1: 'number1',
            })
        },
        mounted() {
            console.log('挂载完毕。。。')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
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