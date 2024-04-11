import { createRouter, createWebHistory } from 'vue-router'

import Categories from './components/home/Categories.vue'
import Top3Items from './components/home/Top3Items.vue'

const routes = [
    {
        path: '/',
        components: {
            default: Categories,
            top: Top3Items
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})