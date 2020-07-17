<template>
    <div class="good">
        商品信息需要缓存
        <ul>
            <li>{{goodInfo.price}}</li>
            <li>{{goodInfo.title}}</li>
            <li>{{goodInfo.description}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'Good',
        data(){
            return {
                goodInfo:{}
            }
        },
        mounted:function(){
            mycache.get('/api/'+this.$route.params.goodApi).then(res=>{
                this.goodInfo = res.data;
            })
        }
    }
</script>