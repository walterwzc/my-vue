const Home = {
    template: "<div>这是首页</div>"
};

const About = {
    template:
        "<div>这是关于我们页面 {{$route.params.id}} - {{$route.params.name}}</div>",
    data: () => {
        return {
            id: "",
            name: ""
        };
    },
    mounted() {
        // this.name = this.$route.query.name
    }
};

const routes = [
    {
        path: "/",
        component: Home
    },

    // 只有通过输入： http://localhost:3001/#/about/111/aaa ， 才能够完整匹配到该路由。
    {
        path: "/about/:id/:name",
        component: About
    }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: "#app",
    router
});
