<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    DiscountsList: defineAsyncComponent(() => import('@/components/discounts/DiscountsList.vue'))
  },

  setup() {}
}
</script>

<template>
  <div class="py-32 xl:w-[1170px] xl:mx-auto">
    <h2
      class="ont-bold font-volkhov text-3xl text-trabook-dark font-bold text-center mb-6 md:text-4xl xl:text-5xl"
    >
      Exclusive <span class="text-trabook-orange-dark">deals & discounts</span>
    </h2>
    <p
      class="text-center mb-16 mx-6 text-trabook-gray md:mx-48 lg:text-lg lg:mx-[300px] xl:mx-[370px]"
    >
      Discover our fantastic early booking discounts & start planning your journey.
    </p>

    <DiscountsList />
  </div>
</template>
