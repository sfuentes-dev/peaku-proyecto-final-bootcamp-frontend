<script>
export default {
  setup() {
    const navContent = [
      {
        title: 'Company',
        items: ['About', 'Careers', 'Logistic', 'Privacy & Policy'],
        classContainer: ''
      },
      {
        title: 'Contact',
        items: ['Help/FAQ', 'Press', 'Affilates'],
        classContainer: 'self-start'
      },
      {
        title: 'More',
        items: ['Press Centre', 'Our Blog', 'Low fare tips'],
        classContainer: 'self-start'
      }
    ]

    return {
      navContent
    }
  }
}
</script>

<template>
  <nav
    class="md:w-[598px] flex flex-wrap md:flex-nowrap gap-10 justify-between items-start md:self-center xl:self-start"
  >
    <div
      v-for="menu in navContent"
      :key="menu.title"
      :class="menu.classContainer"
      class="flex flex-col justify-center gap-8 grow shrink-0 md:grow-0 md:shrink"
    >
      <h5 class="font-semibold text-lg text-trabook-dark text-center xl:text-start">
        {{ menu.title }}
      </h5>

      <div class="flex flex-col justify-between gap-4">
        <a
          v-for="item in menu.items"
          :key="item"
          href="#"
          class="text-trabook-gray text-center xl:text-start hover:text-trabook-orange-dark duration-300 ease-in transition-colors"
          >{{ item }}</a
        >
      </div>
    </div>
  </nav>
</template>
