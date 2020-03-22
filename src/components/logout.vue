<template>
    <div id="logout">
        <button class="logoutBtn" @click="logout">logout</button>
    </div>
</template>
<script>
export default {
    name:'Logout',
    methods:{
        logout:function(){
             this.$store.commit('logoutUser');
             this.$router.push({path: '/'});
        }
    }
}
</script>
<style>
.logoutBtn{
    position:fixed;
    top:20px; 
    right:20px;   
}
</style>