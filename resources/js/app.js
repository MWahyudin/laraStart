require("./bootstrap");
//jquery
import $ from "jquery";

import Vue from "vue";
window.Vue = require("vue");
import { Form, HasError, AlertError } from "vform";
window.Form = Form;

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "2px"
});

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

//Laravel vue pagination
Vue.component('pagination', require('laravel-vue-pagination'));

//progress barr
import VueProgressBar from "vue-progressbar";

//Vue Router
import router from "./router/router";

//sweet alert 2
import swal from "sweetalert2";
window.swal = swal;

//GLobal filter
Vue.filter("upText", function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

//moment
import moment from "moment";
Vue.filter("date", created => {
    return moment(created).format("LLL");
});

//auto focus directive
import autofocus from "vue-autofocus-directive";
Vue.directive("autofocus", autofocus);

const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", swal.stopTimer);
        toast.addEventListener("mouseleave", swal.resumeTimer);
    }
});
window.toast = toast;

const btnDelete = swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});

window.btnDelete = btnDelete;

window.Fire = new Vue();

const app = new Vue({
    router
}).$mount("#app");
