import {
    createRouter,
    createWebHistory
} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import Reg from "../components/Reg.vue"
import Login from "../components/Login.vue"
import Profile from "../views/Profile.vue"
import Hostel from "../views/Hostel.vue"
import Payment from "../views/Payment.vue"
import Search from "../views/Search.vue"
import Rules from "../views/Rules.vue"
import HostelInfo from "../views/HostelInfo.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld,

        },
        {
            path: '/register',
            name: 'register',
            component: Reg,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/Profile',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '/Hostel',
            name: 'Hostel',
            component: Hostel,
        },
        {
            path: '/Payment',
            name: 'Payment',
            component: Payment,
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search,
        },
        {
            path: '/Rules',
            name: 'Rules',
            component: Rules,
        },

        {
            path: '/HostelInfo/:Hid',
            name: 'HostelInfo',
            component: HostelInfo,
            props: true
        },


    ]
})
export default router;