<template>
  <div class="bg-gris">
    <header class="sticky top-0 z-40 h-16 w-full bg-vert px-3">
      <div class="flex h-full w-full items-center justify-between">
        <div class="flex items-center pt-9">
          <RouterLink to="/">
            <img src="./assets/tafari.png" alt="Logo Tafari" />
          </RouterLink>
        </div>
        <div class="lg:hidden">
          <MenuIcon class="w-8 cursor-pointer" @click="MenuOpen = !MenuOpen" />
        </div>
        <nav
          class="absolute left-0 top-0 h-screen w-full -translate-y-[200%] bg-vert pl-2 text-lg lg:relative lg:-top-16 lg:h-min lg:w-fit lg:translate-y-0 lg:bg-transparent"
          :class="MenuOpen && 'translate-y-0'"
        >
          <XIcon
            class="float-right m-10 w-10 lg:hidden"
            @click="MenuOpen = !MenuOpen"
          />
          <ul
            class="mt-32 ml-20 flex flex-col gap-8 py-4 font-bold uppercase text-blanc lg:flex-row"
          >
            <RouterLink to="/" class="lg:hidden" @click="MenuOpen = !MenuOpen"
              >accueil</RouterLink
            >
            <RouterLink to="/programme" @click="MenuOpen = !MenuOpen"
              >programmation</RouterLink
            >
            <RouterLink to="/artistes" @click="MenuOpen = !MenuOpen"
              >artistes</RouterLink
            >
            <RouterLink to="/festival" @click="MenuOpen = !MenuOpen"
              >le festival</RouterLink
            >
            <RouterLink to="/concert" @click="MenuOpen = !MenuOpen"
              >concert</RouterLink
            >
            <RouterLink to="/contact" @click="MenuOpen = !MenuOpen"
              >contact</RouterLink
            >
          </ul>
        </nav>
      </div>
    </header>
    <div class="border-t-4 border-b-4 border-noir"><hr /></div>
    <RouterView />
    <footer>
      <div class="bg-noir pt-4">
        <div class="mx-5 h-10">
          <div
            class="flex justify-between text-base font-semibold capitalize text-blanc"
          >
            <div>
              <RouterLink to="/mentions">mentions légales</RouterLink>
            </div>
            <div>
              <RouterLink to="/contact">contact</RouterLink>
            </div>
            <div class="uppercase">
              <RouterLink to="">tarafi©2023</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      MenuOpen: false,
    };
  },
};
</script>
