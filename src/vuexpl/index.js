var obj = {
    install:function(vue){
        vue.mixin({
            created:function(){
                if(this.$options.isVuex){
                    var name = this.$options.name;
                    //动态import就是懒加载，不会和app.js打包到一起
                    import('../store/modules/'+name).then((res)=>{
                        this.$store.registerModule(name,res.default);
                    });
                }
            }
        })
    }
}
module.exports = obj;