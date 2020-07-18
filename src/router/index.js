import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const RecepieDetails = () => import("@/views/Recepie.vue");
const UserLogin = () => import("@/views/login.vue");
const RecepiesNew = () => import("@/views/AddRecepie.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/recepies/:id",
    name: "RecepieContent",
    props: true,
    component: RecepieDetails,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/new-recepie",
    name: "RecepieNew",
    component: RecepiesNew,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users/signin",
    name: "UserSignin",
    component: UserLogin,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
