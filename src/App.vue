<template>
  <div>
    <header class="bg-trabook-light h-20 lg:h-[114px] flex items-center justify-center">
      <NavBar />
    </header>

    <main class="bg-trabook-light">
      <section class="pb-14 xl:h-[calc(100vh-114px)]">
        <HeroSection />
      </section>

      <section class="bg-trabook-gray xl:h-[730px]">
        <TodoSection />
      </section>

      <section class="bg-trabook-light xl:h-screen">
        <DiscountSection />
      </section>

      <section class="bg-trabook-light xl:h-screen">
        <PlanSection />
      </section>

      <section class="bg-trabook-gray xl:h-[600px] py-32">
        <TestimonialsSection />
      </section>

      <section class="bg-trabook-light xl:h-[1050px] py-32">
        <BlogSection />
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NavBar: defineAsyncComponent(() => import('@/components/navbar/NavBar.vue')),
    HeroSection: defineAsyncComponent(() => import('@/components/hero/HeroSection.vue')),
    TodoSection: defineAsyncComponent(() => import('@/components/todo/TodoSection.vue')),
    DiscountSection: defineAsyncComponent(() =>
      import('@/components/discounts/DiscountSection.vue')
    ),
    PlanSection: defineAsyncComponent(() => import('@/components/plans/PlanSection.vue')),
    TestimonialsSection: defineAsyncComponent(() =>
      import('@/components/testimonials/TestimonialsSection.vue')
    ),
    BlogSection: defineAsyncComponent(() => import('@/components/blog/BlogSection.vue')),
    FooterSection: defineAsyncComponent(() => import('@/components/footer/FooterSection.vue'))
  }
}
</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #fa7436 !important;
}
</style>
