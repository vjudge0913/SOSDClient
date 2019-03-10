import App from './App.vue';

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import test from './views/test.vue';
import horizon from './components/horizon.vue';
import date from './components/date.vue';
import hrY from './components/hr-y.vue';
import comIntro from './components/comIntro.vue';
import excellentWorks from './components/excellentWorks.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: test,
        meta: { title: "福州大学服务外包与软件设计实验室" },
    },
    {
        path:"/horizon",
        component: horizon,
    }
    ,{
        path:"/date",
        component: date,
    }
    ,{
        path:"/hr-y",
        component: hrY,
    }
    ,{
        path:"/com-intro",
        component: comIntro,
    }
    ,{
        path:"/excellent-works",
        component: excellentWorks,
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

