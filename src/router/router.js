import {
    createRouter,
    createWebHistory
} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import Reg from "../components/Reg.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld,

        },
        {
            path: '/register',
            name: '/register',
            component: Reg,
        },



    ]
})
export default router;