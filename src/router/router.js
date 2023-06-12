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
import SearchUser from "../views/SearchUser.vue"
import Document from "../views/Document.vue"
import Zapros from "../views/Zapros.vue"
import Complaint from "../views/Complaint.vue"
import AdminComplaint from "../views/AdminCompaint.vue"
import HostelInfo1 from '../views/HostelInfo1.vue'
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld,

        },
        {
            path: '/HostelInfo1',
            name: 'HostelInfo1',
            component: HostelInfo1,
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
            path: '/Payment/:id',
            name: 'Payment',
            component: Payment,
            props: true
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search,
        },
        {
            path: '/SearchUser',
            name: 'SearchUser',
            component: SearchUser,
        },
        {
            path: '/Rules',
            name: 'Rules',
            component: Rules,
        }, {
            path: '/Document',
            name: 'Document',
            component: Document,
        },
        {
            path: '/Zapros',
            name: 'Zapros',
            component: Zapros,
        },

        {
            path: '/HostelInfo/:Hid',
            name: 'HostelInfo',
            component: HostelInfo,
            props: true
        },
        {
            path: '/Complaint',
            name: 'Complaint',
            component: Complaint,
        },

        {
            path: '/AdminComplaint',
            name: 'AdminComplaint',
            component: AdminComplaint,
        },


    ]
})



export default router;