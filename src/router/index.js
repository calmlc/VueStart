import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Home from '@/pages/home'
import ToDoList from '@/pages/ToDoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/todolist',
      component:ToDoList
    }
  ]
})
