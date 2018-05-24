const NotFound = { template: "<p>Page not found</p>" };
const Home = { template: "<p>home page</p>" };
const About = { template: "<p>about page</p>" };

const routes = {
    "#/": Home,
    "#/about": About
};

new Vue({
    el: "#app",
    data: {
        currentRoute: window.location.hash
    },
    computed: {
        ViewComponent() {
            console.log(window.location.hash)
            return routes[this.currentRoute] || NotFound;
        }
    },
    render(createVirtualDom) {
        // console.log(createVirtualDom);
        return createVirtualDom(this.ViewComponent);
    }
});
