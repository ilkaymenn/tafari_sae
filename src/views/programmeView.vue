<template>
  <div class="mb-16">
    <div
      class="mt-10 grid justify-items-center lg:ml-10 lg:justify-items-start"
    >
      <div class="bg-gradient-to-br from-vert via-jaune to-rouge p-2">
        <h2 class="font-reggae-by-aslam text-4xl capitalize text-blanc">
          programmation
        </h2>
        <h2
          class="-mt-9 ml-0.5 font-reggae-by-aslam text-4xl capitalize text-noir"
        >
          programmation
        </h2>
      </div>
    </div>
    <div
      class="grid dark:text-noir sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4"
    >
      <div>
        <card
          class="bg-rouge"
          image="../../manu-chao.jpg"
          alt="Photographie de Manu Chao"
          artiste="Manu Chao"
          jour="jour 1"
        />
        <RouterLink to="/manuchao">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
      <div>
        <card
          class="bg-rouge"
          image="../../rita-marley.jpg"
          alt="Photographie de Rita Marley"
          artiste="Rita Marley"
          jour="jour 1"
        />
        <RouterLink to="/pageconstruction">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
      <div>
        <card
          class="bg-rouge"
          image="../../alpha-blondy.jpg"
          alt="Photographie de Alpha Blondy"
          artiste="Alpha Blondy"
          jour="jour 1"
        />
        <RouterLink to="/pageconstruction">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
      <div>
        <card
          class="bg-rouge"
          image="../../eddy-grant.jpg"
          alt="Photographie de Eddy Grant"
          artiste="Eddy Grant"
          jour="jour 1"
        />
        <RouterLink to="/pageconstruction">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
      <div>
        <card
          class="bg-vert"
          image="../../yaniss-odua.jpg"
          alt="Photographie de Yaniss Odua"
          artiste="Yaniss Odua"
          jour="jour 2"
        />
        <RouterLink to="/pageconstruction">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
      <div>
        <card
          class="bg-vert"
          image="../../damian-marley.jpg"
          alt="Photographie de Damian Marley"
          artiste="Damian Marley"
          jour="jour 2"
        />
        <RouterLink to="/pageconstruction">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
      <div>
        <card
          class="bg-vert"
          image="../../pierpoljak.jpg"
          alt="Photographie de Pierpoljak"
          artiste="Pierpoljak"
          jour="jour 2"
        />
        <RouterLink to="/pageconstruction">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
      <div>
        <card
          class="bg-vert"
          image="../../horace-andy.jpg"
          alt="Photographie de Horace Andy"
          artiste="Horace Andy"
          jour="jour 2"
        />
        <RouterLink to="/pageconstruction">
          <div class="ml-80 -mt-16">
            <button
              class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
            >
              <PlusIcon class="h-10" />
            </button></div
        ></RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import card from "../components/cards/card.vue";
import { PlusIcon } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: {
    card,
    PlusIcon,
  },
  data() {
    return {};
  },
};
</script>
