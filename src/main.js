import Vue from 'vue'
import App from './Views/App/App.vue'
import router from './Router'
import store from './Store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')