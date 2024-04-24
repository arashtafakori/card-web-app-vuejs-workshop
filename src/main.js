import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createRouter, createWebHistory } from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BookletsListPage from './components/features/booklet/BookletsListPage.vue'
import BookletDetailPage from './components/features/booklet/BookletDetailPage.vue'

import i18n from './i18n'

const routes = [
    { path: '/booklet', component: BookletsListPage },
    { path: '/booklet/:id', component: BookletDetailPage, props: true }
    // { path: '/province', component: ProvincePage },
];

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App).use(router).use(i18n).mount('#app')
