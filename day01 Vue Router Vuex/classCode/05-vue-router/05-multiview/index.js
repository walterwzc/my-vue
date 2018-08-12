// 命名视图：

const Default = {
    template: "<div>这是Default {{$route.query.id}}</div>"
};

const Home = {
    template: "<div>这是首页 {{$route.query.id}}</div>"
};

const About = {
    template: "<div>这是关于我们 {{$route.query.id}}</div>",
    mounted() {
        // this.id = this.$route.params.id
    }
};

const routes = [
    {
        path: "/",

        // 命名路由，在 router-view 之中，通过 name 属性来访问。
        // name: "home",
        components: {

            // 如果在 router-view 之中 不指定 name，那么默认访问的路由
            default: Default,
            home: Home,
            about: About
        },
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
            <div>below is home router-view: </div>
            <router-view name="home"></router-view>
            <div>-------------</div>
            <div>below is home about-view: </div>
            <router-view name="about"></router-view>
            <div>-------------</div>
            <div>below is home default  view: </div>
            <router-view></router-view>
            <div>-------------</div>
        </div>
    `
});
