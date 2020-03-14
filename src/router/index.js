import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import about from '@/components/about'
import theme from '@/components/theme'
import academic from '@/components/academic'
import learn from '@/components/learn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/theme',
      name: 'theme',
      component: theme
    },
    {
      path: '/academic',
      name: 'academic',
      component: academic
    },
    {
      path: '/learn',
      name: 'learn',
      component: learn
    }
  ]
})
