<script>
import { toRefs } from 'vue'

export default {
  props: {
    plan: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const { id, city, country, price, duration, rating, imgUrl } = toRefs(props.plan)

    return { id, city, country, price, duration, rating, imgUrl }
  }
}
</script>

<template>
  <div
    class="w-full h-[385px] xl:h-[448px] bg-white rounded-2xl shadow border border-[#666]/2 overflow-hidden"
  >
    <img :src="imgUrl" :alt="id" class="w-full h-[260px] xl:h-[327px]" />

    <div class="py-6 pl-6 pr-3 flex flex-col justify-center gap-4 cursor-pointer">
      <div class="flex items-center justify-between">
        <h4 class="text-trabook-dark font-medium text-xl xl:text-2xl">{{ city }}, {{ country }}</h4>
        <span class="font-semibold text-trabook-orange-dark text-xl xl:text-2xl"
          >${{ price }}k</span
        >
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <i class="bi bi-send-fill text-trabook-orange-dark"></i>
          <span class="text-trabook-gray font-medium">{{ duration }}</span>
        </div>

        <div class="flex items-center gap-2">
          <i class="bi bi-star-fill text-yellow-300"></i>
          <span class="text-trabook-gray">{{ rating }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
