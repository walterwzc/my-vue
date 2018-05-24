import Vue from 'vue'
import Router from 'vue-router'

import Position from '@/components/Position'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Detail from '@/components/Detail'
import Index from '@/components/Index.vue'
// import App from '../App'

Vue.use(Router)

export default new Router({
    // scrollBehavior (to, from, savedPosition) {
    //   // return 期望滚动到哪个的位置
    //   return {
    //     x: 0,
    //     y: 500
    //   }
    // },
    // mode:"history",
    routes: [
        {
            path: '/',
            component: Index,
            redirect: '/position',
            children: [
                {
                    path: 'position',
                    name: 'position',
                    component: Position
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: Mine
                },
                {
                    path: 'search',
                    name: 'search',
                    component: Search
                },
                {
                    path: 'detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        }
        // {
        //   path: '/detail/:id',
        //   name: 'detail',
        //   component: Detail
        // }
    ]
})
