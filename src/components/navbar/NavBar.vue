<template>
  <nav class="flex items-center justify-between w-full mx-6 lg:w-[880px] xl:w-[1170px]">
    <img src="img/logo.png" alt="trabook company logo" />

    <!-- Mobile  -->
    <div class="inline lg:hidden">
      <button @click="openMenu" class="cursor-pointer">
        <i class="bi bi-list text-4xl"></i>
      </button>
    </div>

    <div class="hidden lg:flex items-center justify-center gap-x-8 ml-7">
      <a
        v-for="item in menu"
        :key="item"
        href="#"
        class="text-trabook-dark hover:text-trabook-orange-dark transition-colors duration-200"
        >{{ item }}</a
      >
    </div>

    <div class="hidden lg:flex items-center gap-10">
      <a href="#" class="text-trabook-orange-light font-semibold">Log in</a>
      <button
        class="text-white font-semibold rounded-md bg-trabook-orange-dark h-11 w-28 lg:w-44 lg:h-12 shadow-lg shadow-[#FA7436]/50 hover:bg-trabook-orange-light transition-colors ease-in duration-200"
      >
        Sign Up
      </button>
    </div>
  </nav>

  <DrawerSide :is-open="isOpen" :menu="menu" @close-menu="closeMenu" />
</template>

<script>
import { ref, computed, defineAsyncComponent } from 'vue'

export default {
  components: {
    DrawerSide: defineAsyncComponent(() => import('./DrawerSide.vue'))
  },

  setup() {
    const menu = ['Home', 'About', 'Destination', 'Tour', 'Blog']
    const isOpen = ref(false)

    const openMenu = () => {
      isOpen.value = true
    }

    const closeMenu = () => {
      isOpen.value = false
    }

    return {
      menu,
      isOpen: computed(() => isOpen.value),
      openMenu,
      closeMenu
    }
  }
}
</script>
