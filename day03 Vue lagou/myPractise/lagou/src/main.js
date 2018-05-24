// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import styles
import './styles/app.scss'
import './assets/libs/swiper-4.1.0.css'

// import javascript


Vue.config.productionTip = false


// console.log(Swiper);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
