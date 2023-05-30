<template>
  <div class="w-[300px] h-[520px] mx-auto md:w-[640px] lg:w-[880px] xl:w-full">
    <Swiper
      :slides-per-view="4"
      :space-between="30"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
        paginationDisabledClass: '.hiddenBullet'
      }"
      :grab-cursor="true"
      :modules="modules"
      :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 30
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: false
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: false
        },
        '1280': {
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: false
        }
      }"
    >
      >
      <SwiperSlide v-for="discount in discounts" :key="discount.id">
        <DiscountCard :discount="discount" />
      </SwiperSlide>

      <div class="hidden md:flex items-center justify-center gap-6 mt-12 z-50">
        <button
          class="prevArrow cursor-pointer w-10 h-10 border border-[#999]/50 bg-[#FEFCFB] rounded-full text-[#999] hover:bg-trabook-orange-dark hover:text-white transition-colors ease-in duration-150"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <button
          class="nextArrow cursor-pointer w-10 h-10 border border-[#999]/50 bg-[#FEFCFB] rounded-full text-[#999] hover:bg-trabook-orange-dark hover:text-white hover:border-[#FA7436] transition-colors ease-in duration-200"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>

      <div class="flex md:hidden items-center justify-center gap-2.5 mt-16"></div>
    </Swiper>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

import trabookApi from '@/api/trabookApi'

import DiscountCard from './DiscountCard.vue'

export default {
  components: {
    DiscountCard,
    Swiper,
    SwiperSlide
  },

  setup() {
    const discounts = ref([])

    const fetchDiscounts = async () => {
      try {
        const { data } = await trabookApi.get('/api/discounts')
        discounts.value = data
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    onMounted(fetchDiscounts)

    return {
      modules: [Navigation, Pagination],
      discounts
    }
  }
}
</script>
