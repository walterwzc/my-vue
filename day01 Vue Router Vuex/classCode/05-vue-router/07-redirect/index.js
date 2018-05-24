// 别名和重定向

const Home = {
    template: "<div>这是首页</div>"
};

const About = {
    template: "<div>这是关于我们</div>"
};

// 根路由会从定向 至 /home ，渲染 HOME 组件， /about 会 渲染 About 组件

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
        // name: "home"
    },
    {
        path: "/about",
        component: About,
        // name: "about"
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
            <router-view></router-view>
        </div>
    `
});
