<template>
  <div>
    <div class="mt-10 ml-5 lg:ml-5">
      <h2 class="font-reggae-by-aslam text-4xl capitalize text-noir">
        contact
      </h2>
      <h2
        class="-mt-9 ml-0.5 font-reggae-by-aslam text-4xl capitalize text-blanc"
      >
        contact
      </h2>
    </div>
    <div class="m-8 h-screen lg:grid lg:grid-cols-2">
      <div class="lg:-mt-96 lg:grid lg:place-content-center">
        <p class="ml-5 font-spinnaker text-xl">
          Contactez nous pour plus d’informations !!
        </p>
        <div class="invisible mt-10 flex h-80 place-content-center lg:visible">
          <img src="../assets/logo.png" alt="logo tafari" />
        </div>
      </div>
      <div class="-mt-80 w-full lg:mt-0 lg:w-full">
        <div class="p-6">
          <form method="" action="">
            <label class="mb-10 block">
              <div
                class="flex items-center rounded-md border-2 border-vert bg-blanc shadow-md shadow-vert"
              >
                <UserRemoveIcon class="m-1 ml-2 h-6" />
                <input
                  name="name"
                  type="text"
                  class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none"
                  placeholder="Nom"
                  required
                />
              </div>
            </label>
            <label class="mb-10 block">
              <div
                class="flex items-center rounded-md border-2 border-jaune bg-blanc shadow-md shadow-jaune"
              >
                <PencilIcon class="m-1 ml-2 h-6" />
                <input
                  name="email"
                  type="email"
                  class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none"
                  placeholder="E-mail"
                  required
                />
              </div>
            </label>
            <label class="mb-10 block">
              <div
                class="flex items-start rounded-md border-2 border-rouge bg-blanc shadow-md shadow-rouge"
              >
                <MailIcon class="m-1 ml-2 h-6" />
                <textarea
                  name="message"
                  class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none"
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </label>
            <div class="mb-6 mt-10 flex place-content-center lg:mt-16">
              <button
                type="submit"
                class="focus:shadow-outline h-10 bg-rouge px-5 font-open-sans text-lg capitalize text-blanc transition-colors duration-150 hover:bg-jaune"
              >
                envoyer
              </button>
            </div>
          </form>
        </div>
        <div class="visible flex h-80 place-content-center lg:invisible">
          <img src="../assets/logo.png" alt="logo tafari" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserRemoveIcon, PencilIcon, MailIcon } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: {
    UserRemoveIcon,
    PencilIcon,
    MailIcon,
  },
  data() {
    return {};
  },
};
</script>
