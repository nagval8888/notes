import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import HomePage from '@/pages/home.vue'
import AboutPage from '@/pages/about.vue'
import NotFoundPage from '@/pages/notFound.vue'
import _itemAlias from '@/pages/_itemAlias.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:itemAlias',
            name: 'itemAlias',
            component: _itemAlias
        },
        {
            //path: "/:pathMatch(.*)*",
            path: '/:CatchAll(.*)',
            name: 'notFound',
            component: NotFoundPage
        },
    ],
})

export default router
