import { createWebHistory, createRouter } from 'vue-router'

import IndexView from '../views/IndexView.vue'
import OverView from '../views/OverView.vue'


const routes = [
    { 
        path: '/', 
        redirect: '/overview',
        component: IndexView,
        children:[
            {
                path:'overview',
                component:OverView,
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router } 