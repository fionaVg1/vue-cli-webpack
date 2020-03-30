<template>
    <!-- vue里实现动画特别简单，用transition -->
    <transition>
        <div class="swiperItem" v-show="isShow">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'SwiperItem',
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                selected: ''
            }
        },
        computed: {
            isShow() {
                return this.selected === this.name;
            }
        }
    }
</script>
<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: all 1s linear;
    }
    
    .v-leave-to {
        transform: translate(-100%);
    }
    
    .v-enter {
        transform: translate(100%);
    }
    
    .v-enter-active {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>