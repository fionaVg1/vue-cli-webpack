<template>
    <div class="bottomBar">
        <div class="playBar" @mouseover="bottomBarShow" @mouseout="bottomBarHide">
            <div class="lock">
                <div class="left">
                    <a class="btn" href="javascript:;"></a>
                </div>
                <div class="right">
                </div>
            </div>
            <div class="bg">
            </div>
            <div class="hand" title="展开播放条"></div>
            <div class="wrap">
                <div class="btns">
                    <a href="javascript:;" hidefocus="true" data-action="prev" class="prv" title="上一首(ctrl+←)">上一首</a>
                    <a href="javascript:;" hidefocus="true" data-action="play" class="ply j-flag" title="播放/暂停(p)">播放/暂停</a>
                    <a href="javascript:;" hidefocus="true" data-action="next" class="nxt" title="下一首(ctrl+→)">下一首</a>
                </div>
                <div class="head">
                    <img src="http://s4.music.126.net/style/web2/img/default/default_album.jpg">
                    <a href="javascript:;" hidefocus="true" class="mask"></a>
                </div>
                <div class="play">
                    <div class="j-flag words"></div>
                    <div class="m-pbar" data-action="noop">
                    <div class="barbg j-flag" id="auto-id-hli4iTz4iVAsqSLH">
                    <div class="rdy" style="width:0%;"></div>
                    <div class="cur" style="width:0%;"><span class="btn f-tdn f-alpha" id="auto-id-hwxIhF5yO9esZFau"><i></i></span></div>
                    </div>
                    <span class="j-flag time"><em>00:00</em> / 00:00</span>
                    </div>
                </div>
                <div class="oper">
                    <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏">收藏</a>
                    <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享">分享</a>
                </div>
                <div class="ctrl">
                    <div class="m-vol" style="visibility:hidden;" id="auto-id-N73GxFJcTX02vJSX">
                        <div class="barbg"></div>
                        <div class="vbg j-t" id="auto-id-DJrnSiScCkfVQVgl">
                            <div class="curr j-t" style="height: 74.4px;"></div>
                            <span class="btn f-alpha j-t" style="top: 16.2px;"></span>
                        </div>
                    </div>
                    <a href="javascript:;" hidefocus="true" data-action="volume" class="icn icn-vol"></a>
                    <a href="javascript:;" hidefocus="true" data-action="mode" class="icn icn-loop" title="循环"></a>
                    <span class="add f-pr">
                        <span class="tip" style="display:none;">已添加到播放列表</span>
                        <a href="javascript:;" title="播放列表" hidefocus="true" data-action="panel" class="icn icn-list s-fc3">0</a>
                    </span>
                    <div class="tip tip-1" style="display:none;">循环</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BottomBar',
    data(){
        return{
            isLocked:true
        }
    },
    methods:{
        bottomBarShow(event){
            var target = event.currentTarget;
            target.style.top = '-53px';
        },
        bottomBarHide(event){
            var target = event.currentTarget;
            if(!this.isLocked){
                target.style.top = '-7px';
            }
        }
    }
}
</script>
<style scoped>
    .bottomBar{
        position:fixed;
        zoom: 1;
        bottom: 0;
        left:0;
        right:0;
        height: 0;
        width:100%;
        z-index:1002;
    }
    .playBar{
        position:absolute;
        top:-53px;
        left:0;
        width: 100%;
        height:53px;
        margin: 0 auto;
    }
    .playBar .bg{
        height: 53px;
        margin-right: 67px;
        background: url("../assets/img/playbar.png");
        background-position:0 0;
        background-repeat:repeat-x;
    }
    .playBar .hand{
        position: absolute;
        top:-10px;
        width: 100%;
        height:20px;
        cursor:pointer;
    }
    .playBar .wrap{
        position: absolute;
        left:50%;
        top:6px;
        z-index:15;
        width: 980px;
        height:47px;
        margin: 0 auto;
        transform: translate(-50%);
    }
    .playBar .wrap .btns,.playBar .wrap .head,.playBar .wrap .play,.playBar .wrap .volum,.playBar .wrap .oper{
        float: left;
    }
    .playBar .wrap .btns{ 
        width: 137px;
        padding: 6px 0 0 0;
    }
    .playBar .wrap .btns a{
        background:url("../assets/img/playbar.png") no-repeat 0 9999px;
        display: block;
        float:left;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        margin-top: 5px;
        text-indent: -9999px;
    }
    .playBar .wrap .btns .prv{
        background-position: 0 -130px;
    }
    .playBar .wrap .btns .ply{
        width: 36px;
        height: 36px;
        margin-top: 0;
        background-position: 0 -204px;
    }
    .playBar .wrap .btns .nxt{
        background-position: -80px -130px;
    }
    .playBar .wrap .head,.playBar .wrap .head img{
        width: 34px;
        height: 34px;
    }
    .playBar .wrap .head{
        position: relative;
        margin: 6px 15px 0 0;
    }
    .playBar .wrap .head .mask{
        position: absolute;
        top:0px;
        left:0px;
        display: block;
        width: 34px;
        height: 35px;
        background:url("../assets/img/playbar.png") no-repeat 0 9999px;
        background-position: 0 -80px;
    }
    .playBar .lock{
        position: relative;
        z-index: 11;        
    }
    .playBar .lock .left{
        position: absolute;
        top:-14px;
        right:15px;
        width:53px;
        height: 67px;
        background: url("../assets/img/playbar.png") no-repeat 0 9999px;
        background-position: 0 -380px;
        float:left;
    }
    .playBar .lock .left .btn{
        background: url("../assets/img/playbar.png") no-repeat 0 9999px;
        background-position: -100px -380px;
        display: block;
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
    }
    .playBar .lock .right{
        float:left;
        background: url("../assets/img/playbar.png") no-repeat 0 9999px;
        position: absolute;
        top:-1px;
        right: 0;
        width:15px;
        height:54px;
        background-position: -52px -393px;
        pointer-events: none;
    }
    img,.txt{
        border:0;
    }
    /**
    css预处理器的使用
    **/
</style>