import { createRouter, createWebHistory } from "vue-router";

// Fonction d'authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import accueilView from "../views/accueilView.vue";
import programmeView from "../views/programmeView.vue";
import artistesView from "../views/artistesView.vue";
import manuchaoView from "../views/manuchaoView.vue";
import festivalView from "../views/festivalView.vue";
import concertView from "../views/concertView.vue";
import contactView from "../views/contactView.vue";
import mentionslegalesView from "../views/mentionslegalesView.vue";
import page404View from "../views/page404View.vue";
import pageEnConstructionView from "../views/pageEnConstructionView.vue";
import chatView from "../views/chatView.vue";
import moncompteView from "../views/moncompteView.vue";
import guidedestyleView from "../views/guidedestyleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "accueilView", component: accueilView },
    { path: "/programme", name: "programmeView", component: programmeView },
    {
      path: "/artistes",
      name: "artistesView",
      component: artistesView,
      beforeEnter: guard,
    },
    { path: "/manuchao", name: "manuchaoView", component: manuchaoView },
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
    {
      path: "/pageconstruction",
      name: "pageEnConstructionView",
      component: pageEnConstructionView,
    },
    {
      path: "/chat",
      name: "chatView",
      component: chatView,
    },
    {
      path: "/moncompte",
      name: "moncompteView",
      component: moncompteView,
    },
    {
      path: "/guidedestyle",
      name: "guidedestyleView",
      component: guidedestyleView,
    },
  ],
});

// On cr???? un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// param??tres : to : d'o?? il vient, from o?? il veut aller, next o?? il doit aller apr??s contr??le
function guard(to, from, next) {
  // recherche utilisateur connect??
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connect??
      console.log("router OK => user ", user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de donn??es (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // userInfo ??tant un tableau, on r??cup??re
        // ses informations dans la 1?? cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "accueilView" });
          return;
        }
      });
    } else {
      // Utilisateur non connect??, renvoi sur accueil
      console.log("router NOK => user ", user);
      next({ name: "accueilView" });
    }
  });
}

export default router;
