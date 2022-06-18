import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/study',
    name: 'study',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/StudyView.vue'),
  },
  {
    path: '/tags',
    name: 'tags',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TagsView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
