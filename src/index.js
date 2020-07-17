// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'
import vuexpl from './vuexpl'

Vue.use(vuexpl);
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.bus = new Vue();
Vue.prototype.$ = $
//第一次加载后，后续无需请求，注意和keep-alive的区别
//热门商品放入localstorage里面，非热门的放到状态缓存里面
//状态模式：状态：3种 见sateDesign.js
//策略模式
//单例模式
if(!window.mycache){
    //备忘录模式
    window.mycache = (function(){
        window.cache = {};
        //记录当前缓存的数量是否过长
        //解决缓存的量引起的内存，存储的压力
        window.cacheArr = [[],[]];
        return {
            get:function(){
                return new Promise((resolve,reject)=>{
                    if(cache[api]){
                        resolve(cache[api])
                    }else{
                        if(localStorage.getItem(api)){
                            resolve(JSON.parse(localStorage.getItem(api)));
                        }else{
                            this.set(api).then(res=>{
                                var name = "";
                                if(res.data.ishot){
                                    if(cacheArr[1].lenghth>1000){
                                        name = cacheArr[1].shift();
                                        localStorage.removeItem(name);
                                    }
                                    localStorage.setItem(api,JSON.stringify(res));
                                    cacheArr[1].push(api);
                                }else{
                                    if(cache[0].lenghth>3000){
                                        name = cache[0].shift();
                                        delete cache[name];
                                    }
                                    cache[api] = res;
                                    cacheArr[0].push(api);
                                }
                                resolve(res);
                            })
                        }
                    }
                })
            },
            set:function(){

            },
            remove:function(){

            }
        }
    })()
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})