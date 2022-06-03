<template>
  <div class="w-screen bg-blanc dark:bg-noir dark:text-blanc">
    <h1
      class="bg-noir p-4 text-center text-4xl font-semibold capitalize text-blanc"
    >
      Guide de style du festival de reggae : Le Tafari !!
    </h1>

    <h2
      class="bg-gradient-to-b from-vert via-jaune to-rouge p-2 pl-10 text-2xl uppercase dark:text-noir"
    >
      <b>I. Couleurs</b>
    </h2>
    <div class="mt-3 flex place-content-center">
      <div class="m-2 h-12 w-20 rounded-2xl bg-noir"></div>
      <div
        class="m-2 h-12 w-20 rounded-2xl border-2 border-black bg-blanc"
      ></div>
      <div
        class="m-2 h-12 w-20 rounded-2xl border-2 border-black bg-jaune"
      ></div>
      <div
        class="m-2 h-12 w-20 rounded-2xl border-2 border-black bg-vert"
      ></div>
      <div
        class="m-2 h-12 w-20 rounded-2xl border-2 border-black bg-rouge"
      ></div>
    </div>

    <h2
      class="mt-3 bg-gradient-to-b from-vert via-jaune to-rouge p-2 pl-10 text-2xl uppercase dark:text-noir"
    >
      <b>II. Polices</b>
    </h2>
    <div class="mt-3 ml-16 lg:flex lg:place-content-evenly">
      <div class="mt-8">
        <p class="font-reggae-by-aslam text-xs font-thin"></p>
        <p class="font-reggae-by-aslam text-sm font-extralight">
          Reggae-By-Aslam
        </p>
        <p class="font-reggae-by-aslam text-base font-light">Reggae-By-Aslam</p>
        <p class="font-reggae-by-aslam text-lg font-normal">Reggae-By-Aslam</p>
        <p class="font-reggae-by-aslam text-xl font-medium">Reggae-By-Aslam</p>
        <p class="font-reggae-by-aslam text-2xl font-semibold">
          Reggae-By-Aslam
        </p>
        <p class="font-reggae-by-aslam text-3xl font-bold">Reggae-By-Aslam</p>
        <p class="font-reggae-by-aslam text-4xl font-extrabold">
          Reggae-By-Aslam
        </p>
      </div>
      <div class="mt-8">
        <p class="font-prompt text-xs font-extralight">Prompt</p>
        <p class="font-prompt text-sm font-thin"></p>
        <p class="font-prompt text-base font-light">Prompt</p>
        <p class="font-prompt text-lg font-normal">Prompt</p>
        <p class="font-prompt text-xl font-medium">Prompt</p>
        <p class="font-prompt text-2xl font-semibold">Prompt</p>
        <p class="font-prompt text-3xl font-bold">Prompt</p>
        <p class="font-prompt text-4xl font-extrabold">Prompt</p>
      </div>
      <div class="mt-8">
        <p class="font-roboto text-xs font-thin"></p>
        <p class="font-roboto text-sm font-extralight">Roboto</p>
        <p class="font-roboto text-base font-light">Roboto</p>
        <p class="font-roboto text-lg font-normal">Roboto</p>
        <p class="font-roboto text-xl font-medium">Roboto</p>
        <p class="font-roboto text-2xl font-semibold">Roboto</p>
        <p class="font-roboto text-3xl font-bold">Roboto</p>
        <p class="font-roboto text-4xl font-extrabold">Roboto</p>
      </div>
      <div class="mt-8">
        <p class="font-spinnaker text-xs font-thin"></p>
        <p class="font-spinnaker text-sm font-extralight">Spinnaker</p>
        <p class="font-spinnaker text-base font-light">Spinnaker</p>
        <p class="font-spinnaker text-lg font-normal">Spinnaker</p>
        <p class="font-spinnaker text-xl font-medium">Spinnaker</p>
        <p class="font-spinnaker text-2xl font-semibold">Spinnaker</p>
        <p class="font-spinnaker text-3xl font-bold">Spinnaker</p>
        <p class="font-spinnaker text-4xl font-extrabold">Spinnaker</p>
      </div>
      <div class="mt-8">
        <p class="font-open-sans text-xs font-thin"></p>
        <p class="font-open-sans text-sm font-extralight">Open-sans</p>
        <p class="font-open-sans text-base font-light">Open-sans</p>
        <p class="font-open-sans text-lg font-normal">Open-sans</p>
        <p class="font-open-sans text-xl font-medium">Open-sans</p>
        <p class="font-open-sans text-2xl font-semibold">Open-sans</p>
        <p class="font-open-sans text-3xl font-bold">Open-sans</p>
        <p class="font-open-sans text-4xl font-extrabold">Open-sans</p>
      </div>
    </div>

    <h2
      class="mt-3 flex bg-gradient-to-b from-vert via-jaune to-rouge p-2 pl-10 text-2xl uppercase dark:text-noir"
    >
      <b>III. Icones</b>
    </h2>
    <div class="mt-3">
      <div class="mt-3 flex place-content-center">
        <TrashIcon class="m-2 h-10 w-10" />
        <SearchIcon class="m-2 h-10 w-10" />
        <PencilAltIcon class="m-2 h-10 w-10" />
        <PlusIcon class="m-2 h-10 w-10" />
        <UserRemoveIcon class="m-2 h-10 w-10" />
        <PencilIcon class="m-2 h-10 w-10" />
        <MailIcon class="m-2 h-10 w-10" />
      </div>
    </div>

    <h2
      class="mt-3 bg-gradient-to-b from-vert via-jaune to-rouge p-2 pl-10 text-2xl uppercase dark:text-noir"
    >
      <b>IV. Composants</b>
    </h2>
    <div class="mt-3 lg:flex lg:place-content-center">
      <div class="px-2 lg:flex">
        <card
          class="bg-rouge"
          image="../../alpha-blondy.jpg"
          alt="Photographie de Alpha Blondy"
          artiste="Alpha Blondy"
          jour="jour 1"
        />
        <card
          class="bg-vert"
          image="../../damian-marley.jpg"
          alt="Photographie de Damian Marley"
          artiste="Damian Marley"
          jour="jour 2"
        />
        <card
          class="bg-rouge"
          image="../../eddy-grant.jpg"
          alt="Photographie de Eddy Grant"
          artiste="Eddy Grant"
          jour="jour 1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  TrashIcon,
  SearchIcon,
  PencilAltIcon,
  PlusIcon,
  UserRemoveIcon,
  PencilIcon,
  MailIcon,
} from "@heroicons/vue/solid";
import card from "../components/cards/card.vue";

export default {
  name: "App",
  components: {
    TrashIcon,
    SearchIcon,
    PencilAltIcon,
    PlusIcon,
    UserRemoveIcon,
    PencilIcon,
    MailIcon,
    card,
  },
};
</script>
