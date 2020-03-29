<template>
    <div>
        <span>Javascript浮点数运算</span>
        <button @click="add">加法运算</button>
        <button @click="sub">减法运算</button>
        <button @click="multi">乘法运算</button>
        <button @click="div">除法运算</button>
    </div>
</template>
<script>
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'
export default{
    name:'math',
    data(){
        return {

        }
    },
    methods:{
        add:function(){
            var result = evaluate(0.1+0.2);
            console.log(result);
        },
        sub:function(){
            var result = evaluate(0.3-0.2);
            console.log(result);
        },
        multi:function(){
            var result = evaluate(19*9*100);
            console.log(result);
        },
        div:function(){
            var result = evaluate(0.3/0.1);
            console.log(result);
        }
    }
}

</script>
