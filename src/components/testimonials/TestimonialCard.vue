<template>
  <div class="flex justify-center items-center h-full">
    <div
      class="p-7 xl:p-8 bg-white rounded-lg shadow-lg leading-loose w-[310px] h-[280px] md:w-[450px] xl:w-[505px] xl:pr-20 xl:mt-0"
    >
      <div
        class="absolute top-0 md:top-2 left-[42%] md:left-[43%] xl:top-4 xl:-left-0 md:w-[68px] md:h-[68px]"
      >
        <img :src="avatar" :alt="name" class="h-16 w-16 md:w-[68px] md:h-[68px] rounded-full" />
      </div>

      <p class="text-[#444] text-center mt-6 md:mt-6 md:mb-6 mb-3 xl:text-left">
        {{ description }}
      </p>

      <span class="block text-center font-semibold text-trabook-dark text-lg xl:text-start">{{
        name
      }}</span>
      <small class="text-center block font-medium text-sm text-trabook-gray xl:text-start"
        >{{ city }}, {{ country }}</small
      >
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    testimonial: {
      type: Object
      // required: true
    }
  },

  setup(props) {
    const { avatar, description, name, city, country } = toRefs(props.testimonial)

    return { avatar, description, name, city, country }
  }
}
</script>
