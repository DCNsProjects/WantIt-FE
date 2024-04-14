import { createRouter, createWebHistory } from 'vue-router'

import Categories from './components/home/Categories.vue'
import Top3Items from './components/home/Top3Items.vue'
import AddProduct from './components/myPage/AddProduct.vue'
import MyAuctions from './components/myPage/MyAuctions.vue'
import UpdateProduct from './components/myPage/UpdateProduct.vue'

const routes = [
    {
        path: '/',
        components: {
            default: Categories,
            top: Top3Items
        }
    },
    {
        path: '/add-product',
        component: AddProduct
    },
    {
        path: '/my-auctions',
        component: MyAuctions
    },
    {
        path: '/update-product',
        component: UpdateProduct
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})