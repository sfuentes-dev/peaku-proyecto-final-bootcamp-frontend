<template>
  <div class="w-full h-[426px] bg-white shadow-lg rounded-lg border border-[#666]/20">
    <div class="relative">
      <img :src="imgUrl" :alt="city" class="w-full h-72 rounded-lg" />

      <div
        class="bg-black/40 h-72 w-full absolute top-0 rounded-lg overflow-hidden flex items-end justify-center pb-10 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in"
      >
        <button class="text-white bg-trabook-orange-light rounded-lg h-12 w-32 font-medium">
          Book Now
        </button>
      </div>
    </div>

    <div class="px-4 py-8 flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <h4 class="text-xl lg:text-2xl font-semibold">{{ city }}</h4>

        <div class="flex items-center gap-2">
          <i class="bi bi-star-fill text-yellow-300"></i>
          <span class="text-trabook-gray">{{ rating }}</span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="bi bi-geo-alt-fill text-trabook-gray"></i>
          <span class="text-trabook-gray">{{ country }}</span>
        </div>

        <div class="flex items-center gap-4">
          <span class="font-medium text-trabook-gray line-through">${{ price }}</span>
          <span class="font-medium text-trabook-orange-dark bg-[#FFE7DB] py-1 px-1.5 rounded-lg"
            >${{ priceDiscount }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    discount: {
      type: Object,
      requiired: true
    }
  },

  setup(props) {
    const { city, country, price, discount: priceDiscount, rating, imgUrl } = toRefs(props.discount)

    return {
      city,
      country,
      price,
      priceDiscount,
      rating,
      imgUrl
    }
  }
}
</script>
