<template>
    <div class="recommend">
        <a-carousel arrows autoplay style="width:980px;margin:0 auto;height: 285px;">
            <div
            slot="prevArrow"  
            class="custom-slick-arrow"
            style="left: 10px;z-index: 1"
            >
                <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
                <a-icon type="right-circle" />
            </div> 
            <div v-for="(image,i) in imgUrls" :key="i">
                <img :src="image.src" style="height:285px;width: 100%;"/>
            </div> 
        </a-carousel>
        <div class="discoverModule">
            <div class="left">
                <HotRecommendGrid></HotRecommendGrid>
            </div>
            <div class="right">

            </div>
        </div>
        <a-bottomBar></a-bottomBar>
    </div> 
</template>
<script>
    import {Carousel,Icon} from 'ant-design-vue';
    import HotRecommendGrid from '@/components/HotRecommendGrid';
    import BottomBar from '@/components/BottomBar';
    import image1 from '@/assets/img/carousel_1.jpg'
    import image2 from '@/assets/img/carousel_2.jpg'
    import image3 from '@/assets/img/carousel_3.jpg'
    import image4 from '@/assets/img/carousel_4.jpg'
    import image5 from '@/assets/img/carousel_5.jpg'
    import image6 from '@/assets/img/carousel_6.jpg'
    const imgUrls = [
        {src:image1},
        {src:image2},
        {src:image3},
        {src:image4},
        {src:image5},
        {src:image6}
    ]
    export default{
        name:'Recommend',
        components:{
            ACarousel:Carousel,
            AIcon:Icon,
            ABottomBar:BottomBar,
            HotRecommendGrid:HotRecommendGrid
        },
        data(){
            return {
                imgUrls:imgUrls,
                image1:image1
            }
        },
        methods:{    
            loadImg: function(path){
                require(path)
            }        
        }
    }
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 285px;
  line-height: 285px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.discoverModule {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    border:1px solid #d3d3d3;
    border-width:0 1px;
    background: url('../assets/img/wrap1.png') repeat-y 100% 100%;
}
.discoverModule .left{
    margin-right: 251px;
}
.discoverModule .right{
    float:right;
    width:250px;
}
</style>