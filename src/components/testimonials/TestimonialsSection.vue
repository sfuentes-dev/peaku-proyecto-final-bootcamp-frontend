<template>
  <div
    class="flex flex-col justify-center items-center mx-auto w-[90%] xl:flex-row xl:w-[1170px] xl:gap-36 xl:items-start relative"
  >
    <div class="pb-10 xl:pb-0 xl:w-[440px] xl:mt-6">
      <h2 class="font-volkhov font-bold text-center text-3xl md:text-4xl xl:text-5xl xl:text-start">
        What people say <span class="text-trabook-orange-dark">about us.</span>
      </h2>
      <p class="text-trabook-gray text-center pt-8 pb-10 xl:text-start xl:mr-3 xl:leading-loose">
        Our Clients send us bunch of smilies with our services and we love them.
      </p>

      <div class="flex items-center justify-center gap-8 mb-6 z-50 xl:justify-normal">
        <button
          class="prevTestimonial cursor-pointer w-10 h-10 border border-[#999]/50 bg-[#FEFCFB] rounded-full text-[#999] hover:bg-trabook-orange-dark hover:text-white transition-colors ease-in duration-150"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <button
          class="nextTestimonial cursor-pointer w-10 h-10 border border-[#999]/50 bg-[#FEFCFB] rounded-full text-[#999] hover:bg-trabook-orange-dark hover:text-white hover:border-[#FA7436] transition-colors ease-in duration-200"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>

    <Swiper
      class="w-[330px] md:w-[550px] h-[340px] md:h-[380px]"
      :navigation="{ nextEl: '.nextTestimonial', prevEl: '.prevTestimonial' }"
      :modules="modules"
      :slides-per-view="1"
      :centered-slides="true"
      :grab-cursor="true"
    >
      <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
        <TestimonialCard :testimonial="testimonial" />
      </SwiperSlide>
    </Swiper>

    <img
      src="img/testimonials-plane.png"
      alt="Decoration Plane"
      class="hidden xl:inline absolute -top-20 -right-28"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import trabookApi from '@/api/trabookApi'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

import TestimonialCard from './TestimonialCard.vue'

export default {
  components: {
    TestimonialCard,
    Swiper,
    SwiperSlide
  },

  setup() {
    const testimonials = ref([])

    const fetchTestimonials = async () => {
      try {
        const { data } = await trabookApi.get('/api/testimonials')
        testimonials.value = data
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    onMounted(fetchTestimonials)

    return {
      testimonials,
      modules: [Navigation, Pagination]
    }
  }
}
</script>
