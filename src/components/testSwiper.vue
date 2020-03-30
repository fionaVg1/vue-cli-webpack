<template>
    <div class="testSwiper">
        <swiper v-model="selected">
            <swiper-item v-for="item in images" :key="item.id" :name="item.name">
                <div class="item">
                    <img :src="item.src" alt="">
                </div>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
    import Swiper from '@/components/Swiper';
    import SwiperItem from '@/components/SwiperItem';
    export default {
        name: 'testSwiper',
        components: {
            Swiper,
            SwiperItem
        },
        data() {
            return {
                selected: 'item2',
                images: [{
                    id: 1,
                    name: 'item1',
                    src: './static/img/1.jpg'
                }, {
                    id: 2,
                    name: 'item2',
                    src: './static/img/2.jpg'
                }, {
                    id: 3,
                    name: 'item3',
                    src: './static/img/3.jpg'
                }, {
                    id: 4,
                    name: 'item4',
                    src: './static/img/4.jpg'
                }, {
                    id: 5,
                    name: 'item5',
                    src: './static/img/5.jpg'
                }, {
                    id: 6,
                    name: 'item6',
                    src: './static/img/6.jpg'
                }]
            }
        },
    }
</script>