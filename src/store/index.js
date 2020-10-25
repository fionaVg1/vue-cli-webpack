import Vue from 'vue'
import Vuex from 'vuex'
import {store as topic} from '@/module/topic/store.js'
Vue.use(Vuex);
const LIST_TYPE = {
  TOP: "top",
  HOT: "hot",
  NEW: "new",
};
export default new Vuex.Store({
    state:{
        isLoggedIn:!!localStorage.getItem('token'),
        activeType:LIST_TYPE.TOP,          
    },
    mutations:{
        loginUser(state){
            localStorage.setItem('token',true);
           
        },
        logoutUser(state){
            localStorage.removeItem('token');        
        },      
    },
    /**
     * actions和mutations的区别是
     * 1、actions可以异步，但是mutaions只能同步
     * 2、actions利于devtools追踪
     */
    actions:{
        login(context){
            setTimeout(() => {                
                context.commit('loginUser');
            }, 200);
        },             
    },
    modules:{
        topic
    }
})