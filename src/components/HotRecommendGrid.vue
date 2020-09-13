<template>
    <div class="hotRecommendGrid">
        <ListTopBar :firstLink='firstLink' :tabList='tabList' :moreLink='moreLink'></ListTopBar>
        <ul class="list" >
            <li v-for="(cover,i) in coverList" :key=i>
                <div class="cover">
                    <img :src="cover.imgSrc" alt="">
                    <a :href="cover.musicHref" class="mask"></a>
                    <div class="bottom">
                        <a href="javascript:;" class="playIcon"></a>
                        <span class="iconHead"></span>
                        <span class="number">{{cover.numberStr}}</span>
                    </div>
                </div>
                <p class="desc">
                    <a href="cover.musicHref" class="title">
                        {{cover.title}}
                    </a>
                </p>
            </li>
        </ul>
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
                moreLink:{},
                coverList:[]
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
            this.tabList.forEach(element => {
                element.href = uri + encodeURI(element.name);
            });
            this.moreLink = {
                href:'/discover/playlist/',name:'更多'
            };
            this.coverList = [
                {
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                },
                {
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                },{
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                },{
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                },{
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                },{
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                },{
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                },{
                    imgSrc:'http://p1.music.126.net/9zp91M4tk3wD11lQgkvw2w==/109951165309876897.jpg?param=140y140',
                    musicHref:'/playlist?id=2409342460',
                    title:'[VIP专享] 一周新歌推荐',
                    numberStr:'37282万'
                }
            ];
        },
        methods:{
            
        }
    }
</script>
<style scoped>
.hotRecommendGrid{
    padding:20px 20px 40px;
}
.list{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin:20px 0 0 -42px;
}
.list li{
    flex:25%;
    list-style:none;
}
.cover{
    position:relative;
    width:140px;
    height:140px;
}
.cover .mask,
.cover .bottom{
    background:url('../assets/img/coverall.png') no-repeat;
}
.cover .mask{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;    
    background-position:0 0;
}
.cover .bottom{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:27px;
    background-position:0 -537px;
    color:#ccc;
}

.cover .bottom .playIcon,
.cover .bottom .iconHead
{
    background:url('../assets/img/iconall.png') no-repeat;
}

.cover .bottom .playIcon{
    position:absolute;
    right:10px;
    bottom:5px;
    width:16px;
    height:17px;
    background-position:0 0;
}
.cover .bottom .playIcon:hover{
    background-position:0 -60px;
}
.cover .bottom .iconHead{
    float:left;
    width:14px;
    height:11px;
    background-position:0 -24px;
    margin:9px 5px 9px 10px;
}
.cover .bottom .number{
    float:left;
    margin:7px 0 0 0;
}
a{
    cursor:pointer;
    text-align:left;
}
.desc{
    margin:8px 0 3px;
    font-size:14px;
    width:140px;
}
.desc a{
    max-width:100%;
    display:inline-block;
    vertical-align:middle;
    color:#000;
}
.desc a:hover{
    text-decoration:underline;
}
</style>