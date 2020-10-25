<template>
    <div class="lazyImage" ref="lazyImage" @scroll="lazyImageScroll">
        <img src="" data-src="../assets/img/carousel_1.jpg"/>
        <img src="" data-src="../assets/img/carousel_2.jpg"/>
        <img src="" data-src="../assets/img/carousel_3.jpg"/>
        <img src="" data-src="../assets/img/carousel_4.jpg"/>
        <img src="" data-src="../assets/img/carousel_5.jpg"/>
        <img src="" data-src="../assets/img/carousel_6.jpg"/>
    </div>
</template>
<script>
export default {
    name:'LazyImage',
    mounted(){        
        
    },
    methods:{
        lazyImageScroll(event){
            var imgs = document.getElementsByTagName('img');
            var scrollTop = this.$refs.lazyImage.scrollTop;
            let index = parseInt(scrollTop/420);
            let img = imgs[index];
            if(!img.getAttribute('src')){
                img.setAttribute('src',img.getAttribute('data-src'));
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
        height: 500px;
    }    
</style>