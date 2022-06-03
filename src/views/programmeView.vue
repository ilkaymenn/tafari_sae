<template>
  <div class="container dark:text-blanc">
    <div
      class="mt-10 grid justify-items-center lg:ml-10 lg:justify-items-start"
    >
      <div class="bg-gradient-to-br from-vert via-jaune to-rouge p-2">
        <h2 class="font-reggae-by-aslam text-4xl capitalize text-blanc">
          les artistes
        </h2>
        <h2
          class="-mt-9 ml-0.5 font-reggae-by-aslam text-4xl capitalize text-noir"
        >
          les artistes
        </h2>
      </div>
    </div>

    <form>
      <h3
        class="mt-3 font-spinnaker text-xl font-bold capitalize text-noir underline"
      >
        Nouvel artiste
      </h3>
      <div class="input-group mt-3 grid justify-items-center">
        <input
          type="text"
          class="form-control input-group-text flex items-center rounded-md border-2 border-vert dark:bg-noir dark:text-noir"
          v-model="nom"
          required
        />
        <button
          class="btn btn-light flex border-2 border-noir bg-gradient-to-br from-vert via-jaune to-rouge p-1 text-noir"
          type="button"
          @click="createArtiste()"
          title="Création"
        >
          Enregistrer
        </button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="text-light table">
        <thead>
          <tr>
            <th scope="col">
              <div
                class="float-left mt-2 font-spinnaker text-xl font-bold capitalize text-noir underline"
              >
                Liste des catégories actuelles
              </div>
              <span class="float-left">
                <div class="input-group">
                  <div class="input-group-prepend h-12">
                    <span class="input-group-text">Filtrage</span>
                  </div>
                  <input
                    type="text"
                    class="form-control input-group-text h-12 items-center rounded-md border-2 border-vert dark:bg-noir dark:text-noir"
                    v-model="filter"
                  />
                  <div
                    class="flex h-12 border-2 border-noir bg-gradient-to-br from-vert via-jaune to-rouge p-1 text-noir"
                  >
                    <SearchIcon class="h-6" />
                    <button
                      class="btn btn-light"
                      type="button"
                      title="Filtrage"
                    >
                      rechercher
                    </button>
                  </div>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form>
                <div class="input-group m-3">
                  <div
                    class="mx-auto grid max-w-5xl grid-flow-row-dense gap-7 sm:grid-cols-[repeat(auto-fit,minmax(22rem,auto))] lg:grid-cols-[repeat(auto-fit,minmax(15rem,auto))]"
                  >
                    <div
                      to="/programmation"
                      v-for="artiste in filterByNom"
                      :key="artiste.id"
                    >
                      <div>
                        <input
                          type="text"
                          class="w-3/4 rounded-br-3xl rounded-bl-sm bg-rouge text-2xl font-bold uppercase text-white"
                          v-model="artiste.nom"
                        />
                      </div>

                      <button
                        class="btn btn-light"
                        type="submit"
                        @click.prevent="updateArtiste(artiste)"
                        title="Modification"
                      >
                        <i class="fa fa-save fa-lg"></i>
                      </button>
                      <button
                        class="btn btn-light focus:shadow-outline font-homenaje m-1 h-10 rounded-xl border-2 border-black bg-white px-5 text-lg text-black transition-colors duration-150 hover:bg-red-700 hover:text-white"
                        type="submit"
                        @click.prevent="deleteArtiste(artiste)"
                        title="Suppression"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { TrashIcon, SearchIcon, PencilAltIcon } from "@heroicons/vue/outline";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "ListeView",
  components: {
    TrashIcon,
    SearchIcon,
    PencilAltIcon,
  },
  data() {
    return {
      nom: null, // Pour la création d'une catégorie
      listeArtisteSynchro: [],
      filter: "",
    };
  },

  computed: {
    //Tri des catégories par ordre alpha
    orderByNom: function () {
      return this.listeArtisteSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    filterByNom: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByNom.filter(function (artiste) {
          return artiste.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByNom;
      }
    },
  },
  mounted() {
    this.getArtisteSynchro();
  },
  methods: {
    async getArtisteSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtiste = collection(firestore, "artiste");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtisteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    async createArtiste() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const docRef = await addDoc(dbArtiste, {
        nom: this.nom,
      });
      console.log("document crée avec le id : ", docRef.id);
    },
    async updateArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await updateDoc(docRef, {
        nom: artiste.nom,
      });
    },
    async deleteArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await deleteDoc(docRef);
    },
  },
};
</script>
