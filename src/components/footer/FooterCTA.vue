<script>
export default {}
</script>

<template>
  <div
    class="xl:bg-[url('img/elipse.png')] bg-no-repeat bg-left-bottom w-80 h-[320px] md:w-[648px] lg:w-[880px] xl:w-[1170px] xl:h-[416px] mx-auto bg-trabook-orange-dark flex flex-col gap-16 items-center justify-center rounded-xl absolute -top-[7%] left-[8%] md:left-[7%] xl:-top-[30%] xl:left-[9.5%] 2xl:left-[19.5%]"
  >
    <h2
      class="text-2xl md:text-3xl lg:text-4xl md:w-2/3 xl:text-5xl xl:w-2/3 text-white font-volkhov font-bold text-center"
    >
      Subscribe and get exclusive deals & offer
    </h2>

    <div class="relative flex flex-col items-center gap-6">
      <i class="bi bi-envelope text-[#999] text-xl absolute top-3 md:top-4 xl:top-5 left-4"></i>
      <input
        type="text"
        placeholder="Enter your mail"
        class="rounded-xl w-72 h-12 md:w-[550px] md:h-14 xl:w-[674px] xl:h-[68px] text-trabook-gray placeholder:text-[#999] placeholder:text-base pl-12 pr-36"
      />

      <button
        class="bg-trabook-dark md:bg-trabook-orange-dark rounded-lg shadow-xl w-32 h-[50px] text-white md:absolute md:right-[1%] md:top-[5%] xl:right-2 xl:top-2.5 hover:bg-trabook-orange-light transition-colors duration-200 ease-in"
      >
        Subscribe
      </button>

      <img
        src="img/tree-2.png"
        alt="Tree Picture"
        class="hidden lg:inline absolute lg:-top-48 lg:-right-36 xl:-top-60 xl:-right-60"
      />
    </div>
  </div>
</template>
