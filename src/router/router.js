import {
    createRouter,
    createWebHistory
} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import Reg from "../components/Reg.vue"
import Login from "../components/Login.vue"
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



    ]
})
export default router;