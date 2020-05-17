import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/templates/Top'
import About from '@/components/templates/About'
import Theme from '@/components/templates/Theme'
import Category from '@/components/templates/Category'
import CategoryDetail from '@/components/templates/CategoryDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
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
    }
  ]
})
