/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//jquery
import $ from 'jquery'

import Vue from 'vue';
window.Vue = require('vue');
import {
    Form,
    HasError,
    AlertError
} from 'vform'
window.Form = Form;

//progress barr
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//
import Dashboard from './components/Dashboard.vue';
import Profile from './components/Profile.vue';
import Users from './components/Users.vue';

//sweet alert 2
import swal from 'sweetalert2';
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)

    }
})
window.toast = toast;

const btnDelete = swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

window.btnDelete = btnDelete;
let routes = [{
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

window.Fire = new Vue()
//GLobal filter
Vue.filter('upText', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
})

//moment
import moment from 'moment';
Vue.filter('date', (created) => {
    return moment(created).format('LLL');
})

//auto focus directive

import autofocus from 'vue-autofocus-directive';
Vue.directive('autofocus', autofocus);

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router
}).$mount('#app')
