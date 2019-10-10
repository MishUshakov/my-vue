import Vue from 'vue'
import App from './Components/App/App.vue'
import router from './Router/router'
import store from './Store/store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')