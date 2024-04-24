import { createRouter, createWebHistory } from 'vue-router'

import Categories from './components/home/Categories.vue'
import Top3Items from './components/home/Top3Items.vue'
import AddProduct from './components/myPage/AddProduct.vue'
import MyAuctions from './components/myPage/MyAuctions.vue'
import UpdateProduct from './components/myPage/UpdateProduct.vue'
import PointLog from './components/point/PointLog.vue'
import Point from './components/point/Point.vue'
import InProgress from './components/auction/InProgressAuction.vue'
import Bid from './components/auction/Bid.vue'
import SignUp from './components/user/SignUp.vue'
import Login from './components/user/Login.vue'
import FinishedAuction from "./components/auction/FinishedAuction.vue"
import LikedAuction from "./components/auction/LikedAuction.vue"
import UpdateUser from "./components/user/UpdateUser.vue"
import UpdatePassword from "./components/user/UpdatePassword.vue"
import ScheduledAuction from "./components/auction/ScheduledAuction.vue"
import FinishedAuctionItemDetail from "./components/auction/FinishedAuctionItemDetail.vue"
import MyBidList from "@/components/auction/MyBidList.vue";

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
        name: 'my-auctions',
        path: '/my-auctions',
        component: MyAuctions
    },
    {
        name: 'update-product',
        path: '/update-product/:id',
        component: UpdateProduct
    },
    {
        path: '/point-log',
        component : PointLog
    },
    {
        path: '/point',
        component : Point
    },
    {
        name: 'inProgress',
        path: '/in-progress',
        component : InProgress
    },
    {
        name: 'bids',
        path: '/bids/:id',
        component : Bid
    },
    {
        path: '/sign-up',
        component : SignUp
    },
    {
        path: '/login',
        component : Login
    },
    {
        name: 'finishedAuctions',
        path: '/finished-auctions',
        component : FinishedAuction
    },
    {
        name: 'finishedDetail',
        path: '/finished-detail/:id',
        component : FinishedAuctionItemDetail
    },
    {
        path: '/liked-auction',
        component : LikedAuction
    },
    {
        path: '/update-user',
        component : UpdateUser
    },
    {
        path: '/update-password',
        component : UpdatePassword
    },
    {
        path: '/scheduled-auction',
        component : ScheduledAuction
    },
    {
        path: '/auction-items/bids',
        component : MyBidList
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
