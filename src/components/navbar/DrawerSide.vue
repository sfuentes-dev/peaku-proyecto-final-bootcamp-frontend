<template>
  <aside
    v-if="isOpen"
    class="inline lg:hidden bg-trabook-light h-full shadow-lg w-screen sm:w-1/2 fixed top-0 right-0 md:shadow-xl"
  >
    <div class="h-20 flex items-center justify-between md:justify-end ml-[11px] mr-9 md:mr-20">
      <img src="img/logo.png" alt="trabook company logo" class="md:hidden" />
      <button @click="$emit('closeMenu')" class="cursor-pointer">
        <i class="bi bi-x-lg text-4xl"></i>
      </button>
    </div>

    <ul class="flex flex-col justify-center items-center gap-y-2 mt-6">
      <li
        v-for="item in menu"
        :key="item"
        class="cursor-pointer w-full text-center py-2 text-trabook-dark hover:bg-trabook-orange-dark hover:text-white transition-colors duration-300 ease-in-out"
      >
        <a href="#">{{ item }}</a>
      </li>
    </ul>

    <div class="flex items-center justify-center mt-4 gap-6">
      <a href="#" class="text-trabook-orange-light font-semibold">Log in</a>
      <button class="text-white font-semibold rounded-md bg-trabook-orange-dark h-11 w-28">
        <a href="#">Sign Up</a>
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true
    },

    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>
