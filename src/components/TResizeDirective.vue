<template>
    <div class="test">
        <div v-resize:[direction].quiet="onResize">window Height is:{{length}}</div>
        <input v-model="text"/>
        <input :value="text" @input="text = $event.target.value"/>
    </div>
</template>
<script>
import resize from '@/directive/resize.js'
export default {
    data(){
        return{
            direction:'vertical',
            length:0,
            text:'测试'
        }
    },
    directives:{
        resize
    },
    methods:{
        onResize(length){
            this.length = length;
        }
    }
}
</script>