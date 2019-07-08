import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditToy from './views/EditToy.vue'
import ToyApp from './views/ToyApp.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('./views/About.vue') //same as importing on top of page
        },
        {
            path: '/toy',
            component: ToyApp
        },

        {
            path: '/toy/edit/:id?',
            component: EditToy
        },

    ]
})