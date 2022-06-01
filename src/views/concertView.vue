<template>
  <div class="mb-16 lg:mb-5">
    <div
      class="mt-10 grid justify-items-center lg:ml-10 lg:justify-items-start"
    >
      <div class="bg-gradient-to-br from-vert via-jaune to-rouge p-2">
        <h2 class="font-reggae-by-aslam text-4xl capitalize text-blanc">
          le concert
        </h2>
        <h2
          class="-mt-9 ml-0.5 font-reggae-by-aslam text-4xl capitalize text-noir"
        >
          le concert
        </h2>
      </div>
    </div>
    <div class="lg:grid lg:grid-cols-3">
      <div class="mt-10 flex place-content-center justify-evenly">
        <div class="lg:m-16 lg:flex lg:flex-col">
          <button
            type="submit"
            class="focus:shadow-outline h-10 rounded-3xl border-2 border-noir bg-jaune px-5 font-open-sans text-lg uppercase text-blanc transition-colors duration-150 hover:border-2 hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge lg:mb-12"
          >
            tous
          </button>
          <button
            type="submit"
            class="focus:shadow-outline h-10 rounded-3xl border-2 border-noir bg-rouge px-5 font-open-sans text-lg uppercase text-blanc transition-colors duration-150 hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge lg:mb-12"
          >
            vendredi
          </button>
          <button
            type="submit"
            class="focus:shadow-outline h-10 rounded-3xl border-2 border-noir bg-vert px-5 font-open-sans text-lg uppercase text-blanc transition-colors duration-150 hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
          >
            samedi
          </button>
        </div>
      </div>
      <div
        class="mb-10 grid sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:col-span-2 lg:grid lg:grid-cols-4"
      >
        <div>
          <card
            class="bg-rouge"
            image="../../public/manu-chao.jpg"
            alt="Photographie de Manu Chao"
            artiste="Manu Chao"
            jour="jour 1"
          />
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:ml-48 lg:-mt-16">
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
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:ml-48 lg:-mt-16">
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
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:ml-48 lg:-mt-16">
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
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:ml-48 lg:-mt-16">
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
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:ml-48 lg:-mt-16">
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
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:ml-48 lg:-mt-16">
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
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:ml-48 lg:-mt-16">
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
          <RouterLink to="/">
            <div class="ml-80 -mt-16 lg:-mt-16 lg:ml-48">
              <button
                class="rounded-full bg-jaune hover:border-2 hover:border-noir hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
              >
                <PlusIcon class="h-10" />
              </button></div
          ></RouterLink>
        </div>
      </div>
    </div>
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
