import Vue from "vue";
import Router from "vue-router";
const Index = () => import("./src/pages/index.vue"); 
const About = () => import("./src/pages/about.vue"); 

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        }
    ]
})
