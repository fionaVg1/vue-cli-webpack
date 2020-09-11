<template>
    <div class="listTopBar">
        <a href="" class="firstLink"></a>
        <div class="tab" v-for="(tab,i) in tabList">
            <a :href="tab.href" class="tabLink">{{tab.name}}</a>
            <span class="line" v-if="i !== tabList.length-1">|</span>
        </div> 
        <span class="more">
            <a href="" class="moreLink">更多</a>
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

</style>