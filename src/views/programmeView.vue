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
    <div class="mt-5 grid justify-items-center lg:grid lg:grid-cols-4">
      <card
        class="bg-rouge"
        image="/src/assets/manu_chao.jpg"
        alt="Photohraphie de Manu Chao"
        artiste="Manu Chao"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="/src/assets/rita_marley.jpg"
        alt="Photohraphie de Rita Marley"
        artiste="Rita Marley"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="/src/assets/alpha_blondy.jpg"
        alt="Photohraphie de Alpha Blondy"
        artiste="Alpha Blondy"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="/src/assets/eddy_grant.jpg"
        alt="Photohraphie de Eddy Grant"
        artiste="Eddy Grant"
        jour="jour 1"
      />
      <card
        class="bg-vert"
        image="/src/assets/yaniss_odua.jpg"
        alt="Photohraphie de Yaniss Odua"
        artiste="Yaniss Odua"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="/src/assets/damian_marley.jpg"
        alt="Photohraphie de Damian Marley"
        artiste="Damian Marley"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="/src/assets/pierpoljak.jpg"
        alt="Photohraphie de Pierpoljak"
        artiste="Pierpoljak"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="/src/assets/horace_andy.jpg"
        alt="Photohraphie de Horace Andy"
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
