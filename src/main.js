import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n'
import {routes} from './route/routes.js'

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App).use(router).use(i18n).mount('#app')
