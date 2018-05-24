// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./vuex/store";
import App from "./App";

import "./assets/libs/bootstrap.min.css";
import "./assets/libs/font-awesome.min.css";
import "./assets/libs/ionicons.min.css";
import "./assets/libs/AdminLTE.min.css";
import "./assets/libs/skin-blue.min.css";

import "./assets/libs/jquery-2.2.3.min.js";
import "./assets/libs/bootstrap.min.js";
import "./assets/libs/app.min.js";
import "./assets/libs/template-web.js";
import "./assets/libs/web-storage-cache.min.js";
import "./assets/libs/jquery.form.min.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: {
        App
    },
    template: "<app />"
});
