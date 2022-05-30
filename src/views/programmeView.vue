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
    <card
      class=""
      image="/src/assets/manu_chao.jpg"
      artiste="Manu"
      jour="jour 1"
    />
    <div class="mt-5 grid justify-items-center lg:grid lg:grid-cols-4">
      <artiste1 class="mb-5" />
      <artiste2 class="mb-5" />
      <artiste3 class="mb-5" />
      <artiste4 class="mb-5" />
      <artiste5 class="mb-5" />
      <artiste6 class="mb-5" />
      <artiste7 class="mb-5" />
      <artiste8 class="mb-5" />
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
