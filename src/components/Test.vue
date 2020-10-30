<template>
    <div class="test">
        <span>这个是计算属性的值{{c}}</span>         
        <button v-on:click="changec">computed缓存测试</button>
    </div>
</template>
<script>
export default {
    name:'Test',
    data(){
        return{
            a:1,
            b:2
        }
    },
    methods:{
        changec(){
            this.a = 1;
            this.b = 2;
        }
    },
    computed:{
        c(){
            return this.a+this.b;
        }
    },
    updated(){
        console.log('updated触发了')
    }
}
</script>

