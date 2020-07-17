<template>
    <div class="hello">
        <ul>
            <router-link to="/good/good1">good1</router-link>
            <router-link to="/good/good2">good2</router-link>
            <router-link to="/good/good3">good3</router-link>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'List',
        data(){
            return{
                msg:'hello'
            }
        }
    }
</script>