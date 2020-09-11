// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ref from 'vue-ref'
import 'ant-design-vue/dist/antd.css';
import './assets/css/index.css'
axios.defaults.baseURL = 'http://localhost:3000/';

Vue.config.productionTip = false
Vue.config.silent = false;
Vue.prototype.axios = axios
Vue.use(ref,{name:'ant-ref'});  
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})