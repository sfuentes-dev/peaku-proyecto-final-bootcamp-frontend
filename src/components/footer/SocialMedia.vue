<script>
export default {
  setup() {
    return {
      socialMediaClass: ['bi bi-facebook', 'bi bi-instagram', 'bi-twitter']
    }
  }
}
</script>

<template>
  <div class="xl:w-64 flex flex-col items-center xl:items-start">
    <img src="img/logo.png" alt="Trabook Logo" />
    <p class="font-medium leading-loose text-trabook-gray mt-6 mb-4 text-center xl:text-start">
      Book your trip in minute, get full control for much longer.
    </p>

    <div class="flex items-center gap-6 mb-12">
      <div
        v-for="media in socialMediaClass"
        :key="media"
        class="cursor-pointer flex items-center justify-center w-10 h-10 bg-white text-trabook-dark shadow-md rounded-full hover:scale-110 hover:bg-trabook-orange-dark hover:text-white transition-all duration-500 ease-in-out"
      >
        <i class="bi text-lg" :class="media"></i>
      </div>
    </div>
  </div>
</template>
