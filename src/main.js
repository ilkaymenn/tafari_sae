import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// Import de mitt
import mitt from "mitt";

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKzixo__x2BJOXduGZ9JsZ71LIKLhmr-4",
  authDomain: "tafari-sae.firebaseapp.com",
  projectId: "tafari-sae",
  storageBucket: "tafari-sae.appspot.com",
  messagingSenderId: "745884367346",
  appId: "1:745884367346:web:e506c3ffdf08d0db12536b",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App);

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router);

app.mount("#app");
