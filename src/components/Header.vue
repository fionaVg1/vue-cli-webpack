<template>
    <div id="header">
        <div class="wrap">
            <div class="nav">
                    <h1 class="logo">
                        <a href="/#">网易云音乐</a>
                    </h1>
                    <a-menu
                        theme="dark"
                        mode="horizontal"
                        @click="onMenuClick"
                        :default-selected-keys="['findMusic']"
                        :style="{ lineHeight: '70px',height:'70px',float:'left' }"
                    >
                        <a-menu-item key="findMusic">
                            <router-link to="/">发现音乐</router-link>                        
                        <sub class="cor" v-show="isShowNav2">&nbsp;</sub>
                        </a-menu-item>
                        <a-menu-item key="myMusic">
                            <router-link to="/myMusic">我的音乐</router-link>
                        </a-menu-item>
                        <a-menu-item key="friends">
                            <router-link to="/friends">朋友</router-link> 
                        </a-menu-item>
                        <a-menu-item key="mall">
                        商城
                        </a-menu-item>
                        <a-menu-item key="musician">
                        音乐人
                        </a-menu-item>
                        <a-menu-item key="download">
                            <em>
                                下载客户端
                            </em>
                            <sub class="hot">&nbsp;</sub>
                        </a-menu-item>
                    </a-menu>         
                                    
                    <a-input-search placeholder="音乐/视频/电台/用户" style="width: 170px;margin-left: 20px;" @search="onSearch" />                
                    <a-button type="primary" ghost style="margin-left:20px;">
                        创作者中心
                    </a-button>
                    <a-button type="link">
                        登录
                    </a-button>                   
            </div>      
            <div class="nav2" v-show="isShowNav2">
                <div class="wrap">
                    <a-menu
                        theme="dark"
                        mode="horizontal"                      
                        :default-selected-keys="['recommend']"
                        :style="{ lineHeight: '34px',height:'34px',float:'left',backgroundColor:'#c20c0c'}"
                    >
                        <a-menu-item key="recommend">
                            <em>
                                推荐
                            </em>                                               
                        </a-menu-item>
                        <a-menu-item key="rankList">
                            <em>
                                <router-link to="/discover/toplist">排行榜</router-link>                                
                            </em>                         
                        </a-menu-item>
                        <a-menu-item key="songList">
                            <em class="f-pr" style="padding: 0 15px 0 11px;position: relative;">
                                <router-link to="/discover/playlist">歌单</router-link>                                
                                <span class="f-pa f-r-white-icon" style="display:inline-block;width:8px;height:8px;top:2px;background-size:cover;"></span>
                            </em>                         
                        </a-menu-item>
                        <a-menu-item key="authorRadio">
                            <em>
                                主播电台
                            </em>                        
                        </a-menu-item>
                        <a-menu-item key="singer">
                            <em>
                                歌手
                            </em>                         
                        </a-menu-item>
                        <a-menu-item key="newDisc">
                            <em>
                                新碟上架
                            </em>                        
                        </a-menu-item>
                    </a-menu> 
                </div>                
            </div>
        </div>
    </div>
</template>
<script> 
    import {Menu,Button, Input} from 'ant-design-vue';
    export default{
        name:'Header',
        components:{AMenu:Menu,AMenuItem:Menu.Item,ASubMenu:Menu.SubMenu,AButton:Button,AInputSearch:Input.Search},
        data(){
            return{
                current:'findMusic'
            }
        },
        methods:{
            onSearch(value){
                console.log(value);
            },
            onMenuClick(e){
                this.current = e.key;
            }
        },
        computed:{
            isShowNav2(){
                return this.current === 'findMusic';
            }
        }
    }
</script>
<style scoped src="@/assets/css/header.css"></style>
<style scoped>
    .nav,.nav2 .wrap{
        width: 1100px;
        margin: 0 auto;
    }
    .nav .logo{
        float:left;
        width: 176px;
        height: 64px;
        background-position: 0 0;
        background-image: url('../assets/img/topbar.png');
    }
    .nav .logo a{
        float: left;
        width: 157px;
        height: 100%;
        padding-right: 20px;
        text-indent: -9999px;
    }
    .nav2{
        z-index: 90;
        height:35px;
        box-sizing: border-box;
        background-color: #c20c0c;
        border-bottom: 1px solid #a40011;
        margin-top: 6px;        
    }
    .nav .cor{
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
        background-image: url('../assets/img/topbar.png');
    }
    .nav .hot{
        display: block;
        position: absolute;
        top: 21px;
        left: 100px;
        width: 28px;
        height: 19px;
        background-position: -190px 0;
        background-image: url('../assets/img/topbar.png');
    }
    .f-r-white-icon{
        background-image: url('../assets/img/white-r-icon@3x.png');
        position: absolute;
    }

</style>