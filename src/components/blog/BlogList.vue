<template>
  <div class="w-[300px] h-[450px] mx-auto md:w-[640px] lg:w-[880px] xl:w-full">
    <Swiper
      :pagination="{ dynamicBullets: true, clickable: true }"
      :grab-cursor="true"
      :modules="modules"
      :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 30
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 30
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 30
        },
        '1280': {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }"
    >
      <SwiperSlide v-for="blog in blogEntries" :key="blog.id">
        <BlogCard :blog="blog" />
      </SwiperSlide>

      <div class="flex items-center justify-center gap-2.5 mt-14"></div>
    </Swiper>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'

import trabookApi from '@/api/trabookApi'

import BlogCard from './BlogCard.vue'

export default {
  components: { BlogCard, Swiper, SwiperSlide },

  setup() {
    const blogEntries = ref([])

    const fetchBlog = async () => {
      try {
        const { data } = await trabookApi.get('/api/blog')
        blogEntries.value = data
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    onMounted(fetchBlog)

    return {
      modules: [Pagination],
      blogEntries
    }
  }
}
</script>
