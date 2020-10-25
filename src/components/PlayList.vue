<template>
    <div class="playList">
        歌单--待开发
        <input v-model="value" type="text">
    </div>
</template>
<script>
    export default{
        name:'PlayList',
        data(){
            return{
                value:''
            }
        }
    }
</script>