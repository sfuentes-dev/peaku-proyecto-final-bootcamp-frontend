<template>
  <div class="h-96 w-full">
    <img :src="imgUrl" :alt="title" class="w-full h-[270px]" />

    <h4 class="font-medium text-lg text-trabook-dark mt-6 mb-4 cursor-pointer">
      {{ title }}
    </h4>

    <span class="text-trabook-gray">{{ date }}</span>
  </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const { title, date, imgUrl } = toRefs(props.blog)

    return { title, date, imgUrl }
  }
}
</script>
