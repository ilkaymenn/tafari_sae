<template>
  <div>
    <div class="mt-10 grid justify-items-center lg:ml-5 lg:justify-items-start">
      <h2 class="font-reggae-by-aslam text-4xl capitalize text-noir">
        programmation
      </h2>
      <h2
        class="-mt-9 ml-0.5 bg-gradient-to-b from-vert via-jaune to-rouge font-reggae-by-aslam text-4xl capitalize text-noir"
      >
        programmation
      </h2>
    </div>
    <div
      class="mt-10 mb-10 grid sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4"
    >
      <card
        class="bg-rouge"
        image="../../public/manu-chao.jpg"
        alt="Photographie de Manu Chao"
        artiste="Manu Chao"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="../../rita-marley.jpg"
        alt="Photographie de Rita Marley"
        artiste="Rita Marley"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="../../alpha-blondy.jpg"
        alt="Photographie de Alpha Blondy"
        artiste="Alpha Blondy"
        jour="jour 1"
      />
      <card
        class="bg-rouge"
        image="../../eddy-grant.jpg"
        alt="Photographie de Eddy Grant"
        artiste="Eddy Grant"
        jour="jour 1"
      />
      <card
        class="bg-vert"
        image="../../yaniss-odua.jpg"
        alt="Photographie de Yaniss Odua"
        artiste="Yaniss Odua"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="../../damian-marley.jpg"
        alt="Photographie de Damian Marley"
        artiste="Damian Marley"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="../../pierpoljak.jpg"
        alt="Photographie de Pierpoljak"
        artiste="Pierpoljak"
        jour="jour 2"
      />
      <card
        class="bg-vert"
        image="../../horace-andy.jpg"
        alt="Photographie de Horace Andy"
        artiste="Horace Andy"
        jour="jour 2"
      />
    </div>
  </div>
</template>

<script>
import card from "../components/cards/card.vue";

export default {
  name: "App",
  components: {
    card,
  },
  data() {
    return {};
  },
};
</script>
