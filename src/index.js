import App from './App.vue';

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import test from './views/test.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: test,
        meta: { title: "福州大学服务外包与软件设计实验室" }
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

//beforeEach//
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});