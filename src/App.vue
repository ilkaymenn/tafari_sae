<template>
  <div class="bg-gris dark:bg-noir dark:text-blanc">
    <header class="sticky top-0 z-40 h-16 w-full bg-vert px-3 lg:pl-8 lg:pr-8">
      <div class="flex h-full w-full items-center justify-between">
        <div class="grid">
          <span v-if="avatar != null" class="mr-3">
            <img class="avatar h-10 w-auto" :src="avatar" />
            <RouterLink to="/" class="text-xs">{{ name }}</RouterLink>
          </span>
        </div>
        <div v-if="avatar != null" class="pt-9">
          <RouterLink to="/">
            <img
              src="./../public/tafari-logo.png"
              alt="Logo Tafari"
              class="hidden"
            />
          </RouterLink>
        </div>
        <div v-else class="pt-9">
          <RouterLink to="/">
            <img src="./../public/tafari-logo.png" alt="Logo Tafari" />
          </RouterLink>
        </div>
        <div class="lg:hidden">
          <MenuIcon
            class="w-8 cursor-pointer text-blanc"
            @click="MenuOpen = !MenuOpen"
          />
        </div>
        <nav
          class="absolute left-0 top-0 h-screen w-full -translate-y-[200%] bg-vert pl-2 text-lg lg:relative lg:-top-16 lg:h-min lg:w-fit lg:translate-y-0 lg:bg-transparent"
          :class="MenuOpen && 'translate-y-0'"
        >
          <XIcon
            class="float-right m-3 w-10 text-blanc lg:hidden"
            @click="MenuOpen = !MenuOpen"
          />
          <ul
            class="mt-32 ml-16 flex flex-col gap-8 py-4 text-xl font-bold uppercase text-blanc lg:flex-row lg:text-lg"
          >
            <RouterLink to="/" class="lg:hidden" @click="MenuOpen = !MenuOpen"
              >accueil</RouterLink
            >
            <RouterLink to="/programme" @click="MenuOpen = !MenuOpen"
              >programmation</RouterLink
            >
            <RouterLink to="/artistes" @click="MenuOpen = !MenuOpen"
              >artistes</RouterLink
            >
            <RouterLink to="/festival" @click="MenuOpen = !MenuOpen"
              >le festival</RouterLink
            >
            <RouterLink to="/concert" @click="MenuOpen = !MenuOpen"
              >concert</RouterLink
            >
            <RouterLink to="/contact" @click="MenuOpen = !MenuOpen"
              >contact</RouterLink
            >
            <RouterLink to="/moncompte" @click="MenuOpen = !MenuOpen"
              >mon compte</RouterLink
            >
            <RouterLink to="/chat" @click="MenuOpen = !MenuOpen"
              >chat</RouterLink
            >
          </ul>
        </nav>
      </div>
    </header>
    <div class="border-t-4 border-b-4 border-noir"><hr /></div>
    <RouterView />
    <footer class="">
      <div class="bg-noir pt-4 dark:bg-vert lg:flex lg:justify-around">
        <div class="mx-5 h-10">
          <div
            class="flex justify-between text-base font-semibold capitalize text-blanc"
          >
            <div class="lg:mr-20">
              <RouterLink to="/mentions">mentions légales</RouterLink>
            </div>
            <div class="lg:mr-20">
              <RouterLink to="/contact">contact</RouterLink>
            </div>
            <div class="uppercase">
              <RouterLink to="">tarafi©2023</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Import emetteur de main.js
import { emitter } from "./main.js";

export default {
  name: "App",
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      MenuOpen: false,
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "Vidéo", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });

    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo = null;
      this.name = "Vidéo";
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>

<style>
/* Import Styles application */
@import "./assets/style.css";

.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
