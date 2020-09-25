import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router/index';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import store from './store/store';
Vue.config.productionTip = true;
Vue.use(Vuetify);

new Vue({
    store,
    router,
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app');
