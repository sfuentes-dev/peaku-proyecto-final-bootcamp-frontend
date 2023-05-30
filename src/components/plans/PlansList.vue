<script>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

import trabookApi from '@/api/trabookApi'

import PlanCard from './PlanCard.vue'

export default {
  components: {
    PlanCard,
    Swiper,
    SwiperSlide
  },

  setup() {
    const plans = ref([])

    const fetchTodos = async () => {
      try {
        const { data } = await trabookApi.get('/api/plans')
        plans.value = data
      } catch (error) {
        console.error('Error fetching plans:', error)
      }
    }

    onMounted(fetchTodos)

    return {
      modules: [Navigation, Pagination],
      plans
    }
  }
}
</script>

<template>
  <div class="w-[300px] h-[520px] mx-auto md:w-[640px] lg:w-[880px] xl:w-full">
    <div class="hidden md:flex items-center justify-end gap-6 mb-6 z-50">
      <button
        class="prevPlan cursor-pointer w-10 h-10 border border-[#999]/50 bg-[#FEFCFB] rounded-full text-[#999] hover:bg-trabook-orange-dark hover:text-white transition-colors ease-in duration-150"
      >
        <i class="bi bi-arrow-left"></i>
      </button>
      <button
        class="nextPlan cursor-pointer w-10 h-10 border border-[#999]/50 bg-[#FEFCFB] rounded-full text-[#999] hover:bg-trabook-orange-dark hover:text-white hover:border-[#FA7436] transition-colors ease-in duration-200"
      >
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>

    <Swiper
      class="mt-12 lg:mt-0"
      :grab-cursor="true"
      :modules="modules"
      ::grab-cursor="true"
      :navigation="{ nextEl: '.nextPlan', prevEl: '.prevPlan' }"
      :pagination="{ dynamicBullets: true, clickable: true }"
      :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: false
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: false
        },
        '1280': {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: false
        }
      }"
    >
      <SwiperSlide v-for="plan in plans" :key="plan.id">
        <PlanCard :plan="plan" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
