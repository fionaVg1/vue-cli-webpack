import Vue from 'vue'
import Router from 'vue-router'
// import Router from '../myRouter'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import testSwiper from '@/components/testSwiper'
import ModuleThink from '@/components/ModuleThink'
import Gallery from '@/components/Gallery'
import List from '@/components/List'
import Good from '@/components/Good'
import Recommend from '@/components/Recommend'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            children:[
                {
                    path:'/',
                    component:Recommend
                }
            ]
        },       
        {
            path: '/index',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/testSwiper',
            name: 'testSwiper',
            component: testSwiper
        },
        {
            path: '/moduleThink',
            name: 'ModuleThink',
            component: ModuleThink
        },
        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery
        },
        {
            path:'/list',
            name:'List',
            component:List
        },
        {
            path:'/good/*',
            name:'Good',
            component:Good
        }
    ]
})