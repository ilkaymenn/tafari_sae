<template>
  <div>
    <div class="mt-10 grid justify-items-center lg:ml-5 lg:justify-items-start">
      <h2 class="font-reggae-by-aslam text-4xl capitalize text-noir">
        contact
      </h2>
      <h2
        class="-mt-9 ml-0.5 font-reggae-by-aslam text-4xl capitalize text-blanc"
      >
        contact
      </h2>
    </div>
    <p class="font-spinnaker text-base">
      Contacté nous pour plus d’informations !
    </p>
    <div class="mx-auto w-full md:w-96 md:max-w-full">
      <div class="p-6">
        <form method="POST" action="https://herotofu.com/start">
          <label class="mb-6 block">
            <div
              class="flex items-center rounded-md border-2 border-vert bg-blanc shadow-md shadow-vert"
            >
              <MenuIcon class="m-1 ml-2 h-6" />
              <input
                name="name"
                type="text"
                class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none focus:ring focus:ring-vert"
                placeholder="Nom"
                required
              />
            </div>
          </label>
          <label class="mb-6 block">
            <div
              class="flex items-center rounded-md border-2 border-jaune bg-blanc shadow-md shadow-jaune"
            >
              <MenuIcon class="m-1 ml-2 h-6" />
              <input
                name="email"
                type="email"
                class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none focus:ring focus:ring-jaune"
                placeholder="E-mail"
                required
              />
            </div>
          </label>
          <label class="mb-6 block">
            <div
              class="flex items-start rounded-md border-2 border-rouge bg-blanc shadow-md shadow-rouge"
            >
              <MenuIcon class="m-1 ml-2 h-6" />
              <textarea
                name="message"
                class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none focus:ring focus:ring-rouge"
                rows="3"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </label>
          <div class="mb-6">
            <button
              type="submit"
              class="focus:shadow-outline h-10 bg-rouge px-5 text-indigo-100 transition-colors duration-150 hover:bg-jaune"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: {
    MenuIcon,
  },
  data() {
    return {};
  },
};
</script>
