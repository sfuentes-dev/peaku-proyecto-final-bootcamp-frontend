<template>
  <div class="py-8 md:py-32 xl:w-[1170px] xl:mx-auto">
    <div class="lg:relative">
      <h2
        class="font-volkhov text-3xl text-trabook-dark font-bold text-center mb-6 md:text-4xl xl:text-5xl"
      >
        Best <span class="text-trabook-orange-dark">vacation plan</span>
      </h2>
      <p class="text-center mb-4 mx-6 text-trabook-gray md:mx-48 lg:text-lg lg:mx-[290px]">
        Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive
        offers!
      </p>

      <img
        src="img/tree.png"
        alt="Tree Pic"
        class="hidden lg:block absolute top-0 lg:right-48 xl:right-48"
      />
    </div>

    <PlansList />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    PlansList: defineAsyncComponent(() => import('@/components/plans/PlansList.vue'))
  },

  setup() {
    return {}
  }
}
</script>
