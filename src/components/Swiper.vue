<template>
    <div class="swiper">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Swiper',
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                current: '',
            }
        },
        methods: {
            updateSwiperItem: function() {
                this.current = this.value || this.$children[0].name;
                this.$children.map(vm => {
                    vm.selected = this.current;
                })
            },
            //每次轮播的时候把name的值进行调整，然后发送到调用该组件的容器
            play() {
                this.timer = setInterval(() => {
                    const index = this.names.indexOf(this.current);
                    let newIndex = index + 1;
                    if (newIndex === this.names.length) {
                        newIndex = 0;
                    }
                    //v-model就是语法糖，等价于value + @input
                    this.$emit('input', this.names[newIndex]);
                }, 3000);
            }
        },
        //如果不释放，会导致内存泄漏
        beforeDestory() {
            clearInterval(this.timer);
        },
        //监听某个值的变化
        watch: {
            value() {
                this.updateSwiperItem();
            }
        },
        mounted() {
            this.names = this.$children.map(child => child.name);
            this.updateSwiperItem();
            this.play();
        }
    }
</script>
<style scoped>
    .swiper {
        width: 640px;
        height: 360px;
        overflow: hidden;
        margin: 0 auto;
        border: 5px solid #dddddd;
        position: relative;
    }
</style>