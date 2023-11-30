import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


import AuthLayout from './../layouts/AuthLayout.vue'
import ProfileView from '../views/ProfileView.vue'
import EmployeeView from '../views/EmployeeView.vue'



const routes: Array<RouteRecordRaw> = [
 
  {
      path: '/',
      component: AuthLayout,
      // beforeEnter: [ isAuthenticatedGuard ],
      children: [
        {
          path: '',
          component: ProfileView,
          meta: { title: 'Home' }
        },
        {
          path: '/home',
          component: EmployeeView,
          meta: { title: 'Home' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
