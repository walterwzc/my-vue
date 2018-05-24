const Home = {
    template: "<div>这是首页</div>"
};

const About = {
    template: "<div>这是关于我们</div>"
};

const Page404 = {
    template: "<div>页面没找到</div>"
};

const routes = [
    {
        path: "/",
        component: Home
    },
    // {
    //   path: '/home',
    //   component: Home,
    //   name: 'home'
    // },
    {
        path: "/about",
        component: About,
        name: "about"
    },
    {
        path: "*",
        component: Page404
    }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: "#app",
    router,
    template: `
        <div>
            <router-link active-class="active" tag="li" exact to="/">首页</router-link>
            <router-link active-class="active" tag="li" to="/about">关于我们</router-link>
            <router-view></router-view>
        </div>
    `
});
