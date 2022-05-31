<template>
  <figure class="m-5 grid grid-flow-row-dense grid-cols-1 rounded-br-5xl">
    <img class="col-span-3 h-48 w-full object-cover" :src="image" alt="" />

    <figcaption class="relative contents w-full">
      <section class="w-full">
        <div class="w-50">
          <h3 class="m-4 font-prompt text-3xl font-bold uppercase text-blanc">
            {{ artiste }}
          </h3>
          <p
            class="m-4 -mt-4 font-roboto text-2xl capitalize text-blanc opacity-50"
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
