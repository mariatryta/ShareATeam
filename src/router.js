import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import firebase from 'firebase';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [  
    {
      path: '/login',
      name: 'forms',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/your-team',
      name: 'yourteam',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/YourTeam.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/sharing/:id',
      name: 'sharing',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Link.vue'),
      
    },
  
    
  ],
});

router.beforeEach((to, from, next) => {
  // loops through routes to check whether there is meta called requiresAuth
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;
  
// redirects use to login if they are not authenticated && try to access Your Team tab
  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router