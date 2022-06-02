<template>
  <div class="container">
    <div class="card bg-dark">
      <div class="row">
        <div class="col-6">
          <div class="card-header">
            <h5 style="color: white">Connexion</h5>
          </div>

          <form @submit.prevent="onCnx">
            <div class="card-body">
              <div class="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Email</span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Adresse mail"
                    type="email"
                    v-model="user.email"
                    required
                  />
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Mot de passe</span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Mot de passe"
                    :type="type"
                    v-model="user.password"
                    required
                  />
                  <div class="input-group-after">
                    <button class="btn btn-light" @click.prevent="affiche()">
                      <i class="fa fa-eye fa-lg"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="alert alert-warning" role="alert">
                {{ message }}
              </div>
            </div>

            <div class="card-footer">
              <button type="submit" class="btn btn-dark float-left">
                Connexion
              </button>
              <button
                type="button"
                class="btn btn-dark float-right"
                @click="onDcnx()"
              >
                Deconnexion
              </button>
            </div>
          </form>
        </div>

        <div class="col-6">
          <div class="card-header">
            <h5 style="color: white">S'inscrire</h5>
          </div>

          <form>
            <div class="card-body">
              <div class="row">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Login</span>
                  </div>
                  <input class="form-control" placeholder="Login" required />
                </div>

                <div class="w-100 mb-3 text-center" v-if="imageData">
                  <img class="preview img-fluid" :src="imageData" />
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Photo</span>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      ref="file"
                      id="file"
                      @change="previewImage"
                    />
                    <label class="custom-file-label" for="file"
                      >Sélectionner l'image</label
                    >
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Email</span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Adresse mail"
                    type="email"
                    required
                  />
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Mot de passe</span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="card-footer text-center">
              <button type="submit" class="btn btn-dark">Créer Compte</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import des fonction d'authentification
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

export default {
  name: "MonCompte",
  data() {
    return {
      user: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
      },
      message: null, // Message de connexion
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
      imageData: null, // Image prévisualisée pour création compte
    };
  },
  mounted() {
    // Montage de la vue
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK - mise à jour du user
          this.user = response.user;
          // Emission evenement de connexion
          emitter.emit("connectUser", { user: this.user });
          console.log("user", this.user);
          // Mise à jour du message
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    // Se deconnecter
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          // Mise à jour du message
          this.message = "User non connecté";
          // Ré initialisation des champs
          this.user = {
            email: null,
            password: null,
          };
          // Emission évènement de déconnexion
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    // Affiche/masque le champs password
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
</style>
