<template>
  <div class="xl:w-[1170px] xl:mx-auto">
    <h2
      class="ont-bold font-volkhov text-3xl text-trabook-dark font-bold text-center mb-16 md:text-4xl xl:text-5xl"
    >
      Get update with <span class="text-trabook-orange-dark">latest blog</span>
    </h2>

    <BlogList />
  </div>
</template>

<script>
import BlogList from './BlogList.vue'

export default {
  components: { BlogList },

  setuo() {
    return {}
  }
}
</script>
