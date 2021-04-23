import {createRouter, createWebHistory} from 'vue-router'
import Welcome from '../src/components/auth/WelcomePage.vue'
import Register from '../src/components/auth/Register.vue'
import RegisterCheck from '../src/components/auth/RegisterCheck.vue'
import Login from '../src/components/auth/Login.vue'
import MainPage from '../src/MainPage.vue'
import NotFound from '../src/components/NotFound.vue'

const routes=[
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/register/check',
        name: 'RegisterCheck',
        component: RegisterCheck
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
      }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router