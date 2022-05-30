<template>
  <figure
    class="m-5 grid grid-flow-row-dense grid-cols-3 rounded-br-3xl bg-rouge"
  >
    <img class="col-span-3 h-48 w-full object-cover" :src="image" alt="" />

    <figcaption
      class="relative contents w-full rounded-lg border-2 border-t-0 border-indigo-100 p-5 pt-8"
    >
      <section class="w-full">
        <div class="w-full text-center">
          <h3 class="font-prompt text-3xl font-bold uppercase text-blanc">
            {{ artiste }}
          </h3>
          <p class="font-roboto text-2xl capitalize text-blanc text-opacity-50">
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
