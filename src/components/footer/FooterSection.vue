<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    SocialMedia: defineAsyncComponent(() => import('@/components/footer/SocialMedia.vue')),
    FooterNavbar: defineAsyncComponent(() => import('@/components/footer/FooterNavbar.vue')),
    FooterCTA: defineAsyncComponent(() => import('@/components/footer/FooterCTA.vue'))
  }
}
</script>

<template>
  <footer class="w'screen bg-trabook-gray xl:h-[700px] pt-[326px] relative">
    <FooterCTA />

    <div class="w-80 md:w-[700px] xl:w-[1170px] mx-auto">
      <div class="flex flex-col xl:flex-row justify-between pb-10">
        <SocialMedia />
        <FooterNavbar />
      </div>

      <hr />

      <div class="flex items-center md:justify-between gap-10 mt-10 pb-4">
        <p class="text-trabook-gray text-sm md:text-base text-center mr-1">
          Copyright, Trabook 2023. All Rights Reserved.
        </p>
        <a
          href="#"
          class="text-trabook-gray text-sm md:text-base text-center hover:text-trabook-orange-dark duration-300 ease-in transition-colors"
          >Terms & Conditions</a
        >
      </div>
    </div>
  </footer>
</template>
