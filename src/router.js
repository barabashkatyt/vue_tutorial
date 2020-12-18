import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: () => import("./views/Todos.vue"),
    },
    {
      path: "/counter",
      component: () => import("./views/Counter.vue"),
    },
    {
      path: "/posts",
      component: () => import("./views/Posts.vue"),
    },
    {
      path: "/clock",
      component: () => import("./views/Clocks.vue"),
    },
  ],
});
