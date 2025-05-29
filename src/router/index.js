import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import HomePage from '@/pages/home.vue'
import AboutPage from '@/pages/about.vue'
import NotFoundPage from '@/pages/notFound.vue'

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
            //path: "/:pathMatch(.*)*",
            path: '/:CatchAll(.*)',
            name: 'notFound',
            component: NotFoundPage
        },
    ],
})

export default router
