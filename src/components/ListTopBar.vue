<template>
    <div class="listTopBar">
        <a href="firstLink.href" class="firstLink">{{firstLink.name}}</a>
        <div class="tab" v-for="(tab,i) in tabList">
            <a :href="tab.href" class="tabLink">{{tab.name}}</a>
            <span class="line" v-if="i !== tabList.length-1">|</span>
        </div> 
        <span class="more">
            <a href="moreLink.href" class="moreLink">更多</a>
            <i class="cor">&nbsp;</i>
        </span>
    </div>
</template>
<script>
    export default{
        name:'ListTopBar',
        props:{
            tabList:Array,
            moreLink:Object,
            firstLink:Object,
        },
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    .listTopBar{
        height: 33px;
        padding:0 10px 0 34px;
        background-position: -225px -156px;
        border-bottom: 2px solid #c10d0c;
        background:url('../assets/img/index.png')
    }
    .more .cor{
        display:inline-block;
        width:12px;
        height:12px;
        margin-left: 4px;
        vertical-align: middle;
        background-position: 0 -240px;
        background:url('../assets/img/index.png');
    }
    .firstLink{
        float:left;
        font-size: 20px;
        font-weight: normal;
        line-height: 28px;
    }
    a{
        color: #333;
    }
    .tab{
        float: left;
        margin:7px 0 0 20px;
    }
    .more{
        float: right;
        margin-top: 9px;
    }
</style>