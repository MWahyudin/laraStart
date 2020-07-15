import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile.vue';
import Users from '../components/Users.vue';

const routes = [{
    path: '/dashboard',
    component: Dashboard
},
{
    path: '/profile',
    component: Profile
},
{
    path: '/users',
    component: Users
}
]

const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router

