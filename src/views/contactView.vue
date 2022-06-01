<template>
  <div>
    <div
      class="mt-10 grid justify-items-center lg:ml-10 lg:justify-items-start"
    >
      <div class="bg-gradient-to-br from-vert via-jaune to-rouge p-2">
        <h2 class="font-reggae-by-aslam text-4xl capitalize text-blanc">
          contact
        </h2>
        <h2
          class="-mt-9 ml-0.5 font-reggae-by-aslam text-4xl capitalize text-noir"
        >
          contact
        </h2>
      </div>
    </div>
    <div class="m-8 h-screen lg:grid lg:grid-cols-2">
      <div class="lg:-mt-96 lg:grid lg:place-content-center">
        <p class="ml-5 font-spinnaker text-2xl">
          Contactez nous pour plus d’informations !
        </p>
        <div class="invisible mt-3 flex h-80 place-content-center lg:visible">
          <img src="../../public/logo-noir.png" alt="logo tafari" />
        </div>
      </div>
      <div class="-mt-80 w-full lg:mt-0 lg:w-full">
        <div class="p-6">
          <form method="" action="">
            <label class="mb-10 block">
              <div
                class="flex items-center rounded-md border-2 border-vert bg-blanc shadow-md shadow-vert"
              >
                <UserRemoveIcon class="m-1 ml-2 h-6 animate-pulse" />
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
                <PencilIcon class="m-1 ml-2 h-6 animate-pulse" />
                <input
                  name="email"
                  type="email"
                  class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none"
                  placeholder="E-mail"
                  required
                />
              </div>
            </label>
            <label class="blocks mb-10">
              <div
                class="flex items-start rounded-md border-2 border-rouge bg-blanc shadow-md shadow-rouge"
              >
                <MailIcon class="m-1 ml-2 h-6 animate-pulse" />
                <textarea
                  name="message"
                  class="ml-2 block w-full rounded-md font-open-sans text-lg focus:outline-none"
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </label>
            <div class="mb-6 -mt-3 flex items-center">
              <div class="ml-3 mt-20 lg:w-1/3"></div>
              <label class="block">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="font-sans text-lg font-semibold text-noir">
                  Send me your newsletter !
                </span>
              </label>
            </div>
            <div class="mb-6 mt-5 flex place-content-center lg:mt-4">
              <button
                type="submit"
                class="h-10 bg-rouge px-5 font-open-sans text-lg capitalize text-blanc transition-colors hover:border-2 hover:border-noir hover:bg-jaune hover:bg-gradient-to-b hover:from-vert hover:via-jaune hover:to-rouge"
              >
                envoyer
              </button>
            </div>
          </form>
        </div>
        <div class="visible flex h-80 place-content-center lg:invisible">
          <img
            src="../../public/logo-noir.png"
            alt="logo tafari"
            class="h-60"
          />
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
