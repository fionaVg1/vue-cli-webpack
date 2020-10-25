import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'
import testSwiper from '@/components/testSwiper'
import ModuleThink from '@/components/ModuleThink'
import Gallery from '@/components/Gallery'
import List from '@/components/List'
import Good from '@/components/Good'
import Recommend from '@/components/Recommend'
import MyMusic from '@/components/MyMusic'
import Friends from '@/components/Friends'
import PlayList from '@/components/PlayList'

import {routes as topic} from '@/module/topic/router.js'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
                    path: '/',
                    component: Recommend
                },
                {
<<<<<<< HEAD
                    path: '/myMusic',
                    component: MyMusic
                },
                {
                    path: '/friends',
                    component: Friends
                }, , {
                    path: '/discover/toplist',
                    component: TopList,
                },
=======
                    path:'/friends',
                    component:Friends
                },                
>>>>>>> b78b0a350f21886073c2539b3b807259e3da99f0
                {
                    path: '/discover/playlist',
                    component: PlayList,
                },
                ...topic
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
            path: '/list',
            name: 'List',
            component: List
        },
        {
<<<<<<< HEAD
            path: '/good/*',
            name: 'Good',
            component: Good
        },
        {
            path: '/noGrapScroll',
            name: 'noGrapScroll',
            component: () =>
                import ('../components/noGrapScroll')
        },
        {
            path: '/lazyImage',
            name: 'LazyImage',
            component: () =>
                import ('../components/lazyImage')
        }

=======
            path:'/good/*',
            name:'Good',
            component:resolve => require(['@/components/Good'], resolve)
        },      
>>>>>>> b78b0a350f21886073c2539b3b807259e3da99f0
    ]
})