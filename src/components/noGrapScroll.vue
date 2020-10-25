<template>
    <div class="container" ref="container">
        <div class="images" ref="images">
            <img src="../assets/img/carousel_1.jpg"/>
            <img src="../assets/img/carousel_2.jpg"/>
            <img src="../assets/img/carousel_3.jpg"/>
            <img src="../assets/img/carousel_4.jpg"/>
            <img src="../assets/img/carousel_5.jpg"/>
        </div>
        <div class="empty" ref="empty"></div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:'noGrapScroll',
        created(){
            axios.get('http://baidu.com').then(function(response){
                console.log(response)
            });
        },
        mounted(){
            let vm = this;
                vm.$refs.empty.innerHTML = vm.$refs.images.innerHTML;
            setInterval(()=>{
                let scrollTop = vm.$refs.container.scrollTop;            
                if(vm.$refs.empty.offsetTop==vm.$refs.container.scrollTop){
                    vm.$refs.container.scrollTop = 0;
                }else{
                    scrollTop = scrollTop + 5;
                    vm.$refs.container.scrollTop = scrollTop;
                }
            },10);            
        }
    }
</script>
<style scoped>
    .container{
        width: 1080px;
        height:840px;
        margin:0 auto;
        overflow:hidden;
    }
    img{
        width: 1080px;
        height: 420px;
    }   
</style>