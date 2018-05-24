import Vue from "vue";
import Router from "vue-router";

import Position from "@/components/Position";
import Mine from "@/components/Mine";
import Search from "@/components/Search";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "position",
            component: Position
        },
        {
            path: "/mine",
            name: "mine",
            component: Mine
        },
        {
            path: "/search",
            name: "search",
            component: Search
        }
    ]
});
