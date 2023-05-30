<template>
  <div
    class="grid grid-cols-1 xl:grid-cols-2 justify-center justify-items-center items-center mx-6 gap-y-10 xl:w-[1170px] xl:mx-auto xl:h-[calc(100vh-114px)] xl:pb-10"
  >
    <div class="flex flex-col items-center xl:items-start">
      <h1
        class="font-volkhov text-center text-trabook-dark text-4xl font-bold mb-8 md:text-5xl lg:text-6xl lg:mx-6 xl:text-start xl:mx-0 xl:text-[64px] lg:mt-6 xl:mt-24 2xl:mt-10"
      >
        Get started your exciting <span class="text-trabook-orange-dark">journey</span> with us.
      </h1>
      <p
        class="text-center text-trabook-gray mb-8 md:text-lg xl:text-xl md:mx-12 xl:text-start xl:ml-0 xl:mr-16 xl:mb-16 xl:leading-loose"
      >
        A Team of experienced tourism professionals will provide you with the best advice and tips
        for your desired place.
      </p>
      <button
        class="font-medium text-trabook-orange-dark border border-[#FA7436] rounded h-12 w-40 md:h-14 md:w-44 hover:text-white hover:bg-trabook-orange-dark transition-colors ease-in duration-200"
      >
        <a href="#">Discover Now</a>
      </button>
    </div>

    <div class="xl:w-[785px] xl:h-full">
      <img src="img/tourist.png" alt="Tourist" class="ml-9 md:ml-20 lg:ml-48 xl:ml-16" />
    </div>

    <SearchBar />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    SearchBar: defineAsyncComponent(() => import('@/components/hero/SearchBar.vue'))
  },

  setup() {}
}
</script>
