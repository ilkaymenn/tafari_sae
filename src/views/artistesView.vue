<template>
  <div class="container">
    <div class="card-header">
      <h5>Liste des catégories</h5>
    </div>
    <hr />

    <form>
      <h6>Nouvelle catégorie</h6>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Libellé</span>
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createArtiste()"
          title="Création"
        >
          dlkgndgb
        </button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="text-light table">
        <thead>
          <tr>
            <th scope="col">
              <div class="float-left">Liste des catégories actuelles</div>
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Filtrage</span>
                  </div>
                  <input type="text" class="form-control" v-model="filter" />
                  <button class="btn btn-light" type="button" title="Filtrage">
                    sfbsbf
                  </button>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artiste in filterByNom" :key="artiste.id">
            <td>
              <form>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Libellé</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="artiste.nom"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="submit"
                    @click.prevent="updateArtiste(artiste)"
                    title="Modification"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="submit"
                    @click.prevent="deleteArtiste(artiste)"
                    title="Suppression"
                  >
                    delete
                  </button>
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

<style scoped></style>
