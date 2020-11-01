<template>
    <div class="lazyImage" ref="lazyImage" @scroll="lazyImageScroll">
        <img src="" data-src="carousel_1.jpg"/>
        <img src="" data-src="carousel_2.jpg"/>
        <img src="" data-src="carousel_3.jpg"/>
        <img src="" data-src="carousel_4.jpg"/>
        <img src="" data-src="carousel_5.jpg"/>
        <img src="" data-src="carousel_6.jpg"/>
    </div>
</template>
<script>
export default {
    name:'LazyImage',
    data(){
        return {
            
        }
    },
    mounted(){        
        var imgs = document.getElementsByTagName('img');
        let firstImg = imgs[0];
        firstImg.setAttribute('src',require('../assets/img/'+firstImg.getAttribute('data-src')));
    },
    methods:{
        lazyImageScroll(event){
            var imgs = document.getElementsByTagName('img');
            var scrollTop = this.$refs.lazyImage.scrollTop;
            let index = parseInt(scrollTop/420);
            let img = imgs[index];
            if(!img.getAttribute('src')){
                img.setAttribute('src',require('../assets/img/'+img.getAttribute('data-src')));
            }            
        }
    }
}
</script>
<style scoped>
    img{
        display: block;
        width: 500px;
        height: 420px;
    }
    .lazyImage{
        width: 500px;
        height: 500px;
        margin:0 auto;
        overflow:auto;
    }    
</style>