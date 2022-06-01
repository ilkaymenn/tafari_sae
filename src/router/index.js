import { createRouter, createWebHistory } from "vue-router";
import accueilView from "../views/accueilView.vue";
import programmeView from "../views/programmeView.vue";
import artistesView from "../views/artistesView.vue";
import festivalView from "../views/festivalView.vue";
import concertView from "../views/concertView.vue";
import contactView from "../views/contactView.vue";
import mentionslegalesView from "../views/mentionslegalesView.vue";
import page404View from "../views/page404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "accueilView", component: accueilView },
    { path: "/programme", name: "programmeView", component: programmeView },
    { path: "/artistes", name: "artistesView", component: artistesView },
    { path: "/festival", name: "festivalView", component: festivalView },
    { path: "/concert", name: "concertView", component: concertView },
    { path: "/contact", name: "contactView", component: contactView },
    {
      path: "/mentions",
      name: "mentionslegalesView",
      component: mentionslegalesView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page404View",
      component: page404View,
    },
  ],
});

export default router;
