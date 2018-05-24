import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

// @代表从 src 的路径开始。
import PositionList from '@/components/position/PositionList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/position',
      redirect: '/position/0'
    },
    {
      path: '/position/:pageno',
      name: 'position',
      component: PositionList,
      props: true
    }
  ]
})
