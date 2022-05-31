<template>
  <figure class="m-5 grid grid-flow-row-dense grid-cols-3 rounded-br-3xl">
    <img class="col-span-3 h-48 w-full object-cover" :src="image" alt="" />

    <figcaption class="relative contents w-full">
      <section class="w-full">
        <div class="w-full text-center">
          <h3 class="-ml-4 font-prompt text-3xl font-bold uppercase text-blanc">
            {{ artiste }}
          </h3>
          <p
            class="-ml-12 font-roboto text-2xl capitalize text-blanc text-opacity-50"
          >
            {{ jour }}
          </p>
        </div>
      </section>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    artiste: String,
    image: String,
    jour: String,
  },
  components: {},
};
</script>
