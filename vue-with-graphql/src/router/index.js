import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    linkActiveClass: 'active',
    routes
})

router.beforeEach((to, from, next) => {

    next()
})

export {
    router,
    routes
}
