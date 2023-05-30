<template>
  <div class="flex flex-col justify-center items-center py-28 xl:w-[1170px] xl:mx-auto">
    <div class="flex flex-col items-center justify-center lg:relative">
      <h2
        class="font-bold font-volkhov text-3xl text-trabook-dark mb-7 ml-4 md:ml-0 md:text-4xl xl:text-5xl"
      >
        Things you need <span class="text-trabook-orange-dark">to do</span>
      </h2>
      <p class="text-trabook-gray text-center mx-10 mb-16 md:mx-28 md:w-5/12 lg:text-lg">
        We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can
        afford.
      </p>

      <img
        src="img/airplane-todo.png"
        alt=""
        class="absolute right-11 bottom-20 hidden lg:inline-block w-40"
      />
    </div>

    <div
      class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1 md:mx-6 lg:mx-16 xl:mx-0 xl:gap-4"
    >
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="bg-white rounded-lg shadow-md mx-7 md:mx-1 p-6 xl:p-10 flex flex-col items-center md:items-start"
      >
        <img :src="todo.imgUrl" :alt="todo.title" class="mb-8" />
        <h4 class="mb-4 font-semibold text-xl xl:text-2xl">{{ todo.title }}</h4>
        <p class="text-trabook-gray text-sm text-center md:text-start xl:text-base">
          {{ todo.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import trabookApi from '@/api/trabookApi'

export default {
  setup() {
    const todos = ref([])

    const fetchTodos = async () => {
      try {
        const { data } = await trabookApi.get('/api/todos')
        todos.value = data
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }

    onMounted(fetchTodos)

    return {
      todos
    }
  }
}
</script>
