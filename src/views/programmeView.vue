<template>
  <div>
    <div class="mt-10 grid justify-items-center lg:ml-5 lg:justify-items-start">
      <h2 class="font-reggae-by-aslam text-4xl capitalize text-noir">
        programmation
      </h2>
      <h2
        class="-mt-9 ml-0.5 font-reggae-by-aslam text-4xl capitalize text-blanc"
      >
        programmation
      </h2>
    </div>
    <div
      class="mt-10 mb-10 grid sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4"
    >
      <card
        class="bg-rouge"
        image="/src/assets/manu_chao.jpg"
        alt="Photographie de Manu Chao"
        artiste="Manu Chao"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="/src/assets/rita_marley.jpg"
        alt="Photographie de Rita Marley"
        artiste="Rita Marley"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="/src/assets/alpha_blondy.jpg"
        alt="Photographie de Alpha Blondy"
        artiste="Alpha Blondy"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="/src/assets/eddy-grant.jpg"
        alt="Photographie de Eddy Grant"
        artiste="Eddy Grant"
        jour="jour 1"
      />
      <card
        class="bg-vert"
        image="/src/assets/yaniss_odua.jpg"
        alt="Photographie de Yaniss Odua"
        artiste="Yaniss Odua"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="/src/assets/damian_marley.jpg"
        alt="Photographie de Damian Marley"
        artiste="Damian Marley"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="/src/assets/pierpoljak.jpg"
        alt="Photographie de Pierpoljak"
        artiste="Pierpoljak"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="/src/assets/horace_andy.jpg"
        alt="Photographie de Horace Andy"
        artiste="Horace Andy"
        jour="jour 2"
      />
    </div>
  </div>
</template>

<script>
import card from "../components/cards/card.vue";
import artiste1 from "../components/cards/artiste1.vue";
import artiste2 from "../components/cards/artiste2.vue";
import artiste3 from "../components/cards/artiste3.vue";
import artiste4 from "../components/cards/artiste4.vue";
import artiste5 from "../components/cards/artiste5.vue";
import artiste6 from "../components/cards/artiste6.vue";
import artiste7 from "../components/cards/artiste7.vue";
import artiste8 from "../components/cards/artiste8.vue";

export default {
  name: "App",
  components: {
    card,
    artiste1,
    artiste2,
    artiste3,
    artiste4,
    artiste5,
    artiste6,
    artiste7,
    artiste8,
  },
  data() {
    return {};
  },
};
</script>
