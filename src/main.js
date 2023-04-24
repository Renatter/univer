import {
    createApp
} from 'vue'

import './style.css'
import App from './App.vue'
import router from './router/router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

createApp(App).use(router).use(VueDatePicker).mount('#app')