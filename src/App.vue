<template>
  <div id="app">
        <router-view/>    
  </div>
</template>

<script>
    import {
        mutations
    } from './myStore';
    import config from "./config/config";
    export default {
        name: 'App',
        data(){
            return {
                themeType:'blue'
            }
        },
        provide(){
            return{
                theme:this.theme
            }
        },
        computed:{
            theme(){
                return config.get('theme')[this.themeType]
            }
        },
        methods: {
            change: function(e) {
                mutations.changeDep('789');
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;  
        height: 100%;         
    }   
</style>