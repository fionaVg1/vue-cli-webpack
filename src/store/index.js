import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        isLoggedIn:!!localStorage.getItem('token')        
    },
    mutations:{
        loginUser(state){
            localStorage.setItem('token',true);
           
        },
        logoutUser(state){
            localStorage.removeItem('token');        
        }

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
    }
})