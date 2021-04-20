import {createRouter, createWebHistory} from 'vue-router'
import App from '../src/App.vue'
import Welcome from '../src/components/auth/WelcomePage.vue'

const routes=[
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router