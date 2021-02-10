import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleNote from '../views/SingleNote.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Home
  },
  {
    path: '/note/:id',
    name: 'SingleNote',
    props: true,
    component: SingleNote
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
