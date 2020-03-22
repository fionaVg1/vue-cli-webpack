<template>
    <div id="login">
        <button @click="login">login</button>
    </div>
</template>
<script>
export default {
    name:'Login',
    methods: {
        login:function(){
            this.$store.dispatch('login');
            this.$router.push({path: '/index'});
        }
    }
}
</script>
