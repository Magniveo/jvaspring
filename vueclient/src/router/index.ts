import Vue from "vue";
import Router from "vue-router";
import VueRouter from 'vue-router';

const routerOptions = [
    { path: "/loadfile", component: "pages/LoadFile" },
];

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`../${route.component}.vue`)
    };
});

const routed = new VueRouter();

Vue.use(Router);

const routing =  new Router({
    mode: "history",
    routes
});
routing.beforeEach((to, from, next) => {
        next();
})
export default routing;