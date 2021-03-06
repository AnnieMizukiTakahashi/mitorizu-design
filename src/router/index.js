import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/pages/Top'
import About from '@/components/pages/About'
import Theme from '@/components/pages/Theme'
import Category from '@/components/pages/Category'
import CategoryDetail from '@/components/pages/CategoryDetail'
import ThemeDetail from '@/components/pages/ThemeDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/theme',
      name: 'theme',
      component: Theme
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/category-detail',
      name: 'category-detail',
      component: CategoryDetail
    },
    {
      path: '/theme-detail',
      name: 'theme-detail',
      component: ThemeDetail
    }
  ]
})
