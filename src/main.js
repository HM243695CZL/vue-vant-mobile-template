import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import './styles/index.scss'

Vue.config.productionTip = false

Vue.use(vant)
if (process.env.NODE_ENV === 'development') {
    const {mockXHR} = require('../mock/index.js')
    mockXHR()
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
