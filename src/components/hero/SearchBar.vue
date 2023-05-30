<template>
  <div
    class="grid grid-cols-1 md:grid-cols-4 md:items-center md:justify-between md:gap-x-0.5 gap-y-9 px-6 py-8 shadow-2xl mb-16 rounded-md lg:w-[840px] lg:flex xl:mx-auto xl:col-span-2"
  >
    <div class="lg:w-40">
      <div class="flex items-center gap-1">
        <label for="location" class="font-medium text-trabook-dark cursor-pointer">Location</label>
        <i
          @click="onLocationSelection"
          class="bi bi-chevron-down text-trabook-orange-dark cursor-pointer"
        ></i>
      </div>

      <select
        name="location"
        id="location"
        class="appearance-none text-sm text-trabook-gray focus:outline-slate-200"
        ref="locationSelect"
      >
        <option value="">Where are you going</option>
        <option v-for="city in locationCities" :key="city" :value="city">{{ city }}</option>
      </select>
    </div>

    <div class="lg:w-40 md:ml-4 lg:ml-0">
      <div class="flex items-center gap-1">
        <label for="date" class="font-medium text-trabook-dark cursor-pointer">Date</label>
        <i
          @click="onDateFocus"
          class="bi bi-chevron-down text-trabook-orange-dark cursor-pointer"
        ></i>
      </div>

      <input
        placeholder="When will you go"
        class="text-sm text-trabook-gray placeholder:text-trabook-gray appearance-none focus:outline-none"
        type="text"
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
        id="date"
        ref="dateInput"
      />
    </div>

    <div class="lg:w-40">
      <div class="flex items-center gap-1">
        <label for="guest" class="font-medium text-trabook-dark cursor-pointer">Guest</label>
        <i
          @click="onGuestFocus"
          class="bi bi-chevron-down text-trabook-orange-dark cursor-pointer"
        ></i>
      </div>

      <input
        placeholder="Number of guests"
        class="text-sm text-trabook-gray placeholder:text-trabook-gray appearance-none focus:outline-none w-40"
        type="number"
        id="guest"
        min="1"
        max="20"
        ref="guestFocust"
      />
    </div>

    <button
      class="text-white bg-trabook-orange-dark rounded font-medium text h-12 w-36 shadow-lg shadow-[#FA7436]/50 md:h-14 md:w-40 hover:bg-trabook-orange-light transition-colors ease-in duration-200"
    >
      <a href="#">Explore Now</a>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const dateInput = ref(null)

    const onDateFocus = () => dateInput.value.focus()

    const locationSelect = ref(null)
    const onLocationSelection = () => locationSelect.value.focus()

    const guestFocust = ref(null)
    const onGuestFocus = () => guestFocust.value.focus()

    return {
      locationCities: [
        'Rome',
        'Tokyo',
        'Paris',
        'Cancun',
        'Orlando',
        'Kioto',
        'Madrid',
        'Firenze',
        'London'
      ],

      dateInput,
      onDateFocus,

      locationSelect,
      onLocationSelection,

      guestFocust,
      onGuestFocus
    }
  }
}
</script>
