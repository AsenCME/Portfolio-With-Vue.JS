import Vue from "vue";
import Router from "vue-router";

// Components
import Home from "../components/Home.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";

Vue.use(Router);

const router = new Router({
  root: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "**",
      redirect: "/",
    },
  ],
});

export default router;
