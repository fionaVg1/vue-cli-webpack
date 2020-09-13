<template>
    <div class="bottomBar">
        <div class="playBar">
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
    name:'BottomBar'
}
</script>
<style scoped>
</style>