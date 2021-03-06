// 编程式导航：

const About = {
    props: ["id"],
    // 注意： 在这里使用的是 $route， 而不是 $router!!!
    // {{$router.query.name}}
    template: "<div>这是关于我们, id的值通过 RESTFUL的URL : (/about/:id) -> 来传递，其值为：{{id}}， name通过query来传递， 其值为： {{$route.query.name}}  </div>",
    created() {
        console.log('--------ABOUT')
        console.log(this.$route);
        console.log('--------ABOUT')
    }
};

const Page404 = {
    template: "<div>404</div>"
};

const Home = {
    // <about id="xxx"></about>   在主页之中也使用了 ： about 模块， 其给 id 传了 id="xxx" 。
    // 在路由之中定义：  pros: true, 表明 子组件 不仅可以接受 父组件 传递过来的值， 同时可以接受 URL 传递过来的值。
    template: '<div>这是首页, $route.params.id -> {{$route.params.id}} <about id="!!this id is passed from father component!!"></about></div>',
    components: {
        Page404,
        About
    },
    created() {
        console.log('--------HOME')
        console.log(this.$route)
        console.log('--------HOME')
    }
};

const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {
        path: "/about/:id",
        component: About,
        name: "about",

        // 接受请求传递过来的 props 属性
        // 默认只接受 父组件传递过来的 props 属性
        props: true 
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

const vm = new Vue({
    el: "#app",
    router,
    template: `
        <div>
            <button @click="toPage('/')">首页</button>
            <button @click="toPage('/about')">关于我们</button>
            <p>below is router-view: </p>
            <hr/>
            <router-view></router-view>
        </div>
    `,
    methods: {
        // button 路由切换

        toPage(path) {
            // let params = this.$route.params.id
            // this.$router.push(path + params)
            this.$router.replace({
                name: path == "/" ? "home" : "about",
                params: { id: 55 },
                // path,
                query: {name: 'walter'}
            });
        }
    }
});
