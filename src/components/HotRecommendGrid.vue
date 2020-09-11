<template>
    <div class="hotRecommendGrid">
        <ListTopBar :firstLink='firstLink' :tabList='tabList' :moreLink='moreLink'></ListTopBar>
    </div>
</template>
<script>
    import ListTopBar from '@/components/ListTopBar'
    export default{
        name:'HotRecommendGrid',
        components:{
            ListTopBar:ListTopBar
        },
        data(){
            return {
                firstLink:{},
                tabList:[],
                moreLink:{}
            }
        },
        mounted:function(){
            this.firstLink = {href:'/discover/playlist/',name:'热门推荐'};
            this.tabList = [
                {href:'/discover/playlist/?cat='+encodeURI('华语'),name:'华语'},
                {href:'',name:'流行'},
                {href:'',name:'摇滚'},
                {href:'',name:'民谣'},
                {href:'',name:'电子'}
            ];
            var uri = '/discover/playlist/?cat=';
            this.moreLink = {
                href:'/discover/playlist/',name:'更多'
            };
        },
        methods:{
            
        }
    }
</script>
<style scoped>

</style>