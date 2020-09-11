<template>
    <a-layout id="home">
        <a-layout-header :style="{position:'fixed',zIndex:1,width:'100%',padding:0}">
            <a-header></a-header>
        </a-layout-header>
        <a-layout-content :style="{padding:'0 50px',margin:'0 auto',width:'1110px',marginTop:'104px'}">
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>
            test
        </a-layout-footer>
    </a-layout>
</template>
<script>
    import Header from './Header';
    import {Layout} from 'ant-design-vue';
    export default{
        name:'Home',
        components:{
            AHeader:Header,
            ALayout:Layout,
            ALayoutHeader:Layout.Header,
            ALayoutContent:Layout.Content,
            ALayoutFooter:Layout.Footer
        }
    }
</script>
<style>
    .ant-layout-header {
        height:70px;
    }
</style>