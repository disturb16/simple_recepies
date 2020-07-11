import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const RecepieDetails = () => import("@/views/Recepie.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recepies/:id",
    name: "RecepieContent",
    props: true,
    component: RecepieDetails,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
