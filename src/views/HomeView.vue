<template>
  <div class="home min-h-screen bg-main bg-cover bg-no-repeat bg-center">
    <h1
      class="text-main-heading-mobile lg:text-main-heading leading-heading pt-8 text-center stroke-black text-primary-orange drop-shadow-md"
      id="app-title"
    >
      INTERWEATHER
    </h1>

    <!----------------------------------------- cards container   -------------------------------------------->
    <h2>Budapest</h2>
    <TemperatureCard
      :labels="$store.getters.budapestDays"
      :data="$store.getters.budapestTemp"
    />
    <h2>London</h2>
    <TemperatureCard
      :labels="$store.getters.londonDays"
      :data="$store.getters.londonTemp"
    />
    <hr />

    <div
      class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 py-8 px-4 lg:px-20"
    >
      <!---------------- BUDAPEST ----------------->
      <Suspense>
        <!-- component with nested async dependencies -->
        <div
          class="p-5 lg:p-8 border-2 border-solid border-chelsea-blue flex flex-col gap-10"
        >
          <div class="flex justify-between items-center">
            <h2
              class="text-card-heading text-chelsea-blue text-center font-extrabold"
            >
              BUDAPEST
            </h2>

            <!-- modal open button  -->
            <button
              class="bg-chelsea-blue px-6 py-2 text-white rounded-md"
              @click="showBpModal = !showBpModal"
            >
              Rain
            </button>
          </div>

          <!-- temperature component  -->
          <BudapestTempCard />

          <!-- rain modal  -->
          <BpestRainModal
            v-show="showBpModal"
            @close-modal="showBpModal = !showBpModal"
          />
        </div>
        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>

      <!--------------- LONDON ------------------>
      <Suspense>
        <!-- component with nested async dependencies -->
        <div
          class="p-5 lg:p-8 border-2 border-solid border-chelsea-blue flex flex-col gap-10"
        >
          <div class="flex justify-between items-center">
            <h2
              class="text-card-heading text-chelsea-blue text-center font-extrabold"
            >
              LONDON
            </h2>

            <!-- modal open button  -->
            <button
              class="bg-chelsea-blue px-6 py-2 text-white rounded-md"
              @click="showLndnModal = !showLndnModal"
            >
              Rain
            </button>
          </div>

          <!-- temperature component -->
          <LondonTempCard />

          <!-- rain modal  -->
          <LondonRainModal
            v-show="showLndnModal"
            @close-modal="showLndnModal = !showLndnModal"
          />
        </div>
        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>

      <!---------------   NEW YORK   ---------------->
      <Suspense>
        <!-- component with nested async dependencies -->
        <div
          class="p-5 lg:p-8 border-2 border-solid border-chelsea-blue flex flex-col gap-10"
        >
          <div class="flex justify-between items-center">
            <h2
              class="text-card-heading text-chelsea-blue text-center font-extrabold"
            >
              NEW YORK
            </h2>

            <!-- modal open button  -->
            <button
              class="bg-chelsea-blue px-6 py-2 text-white rounded-md"
              @click="showNyModal = !showNyModal"
            >
              Rain
            </button>
          </div>

          <!-- temperature component -->
          <NyTempCard />

          <!-- rain modal  -->
          <NyRainModal
            v-show="showNyModal"
            @close-modal="showNyModal = !showNyModal"
          />
        </div>
        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>

      <!------------------- TOKYO  ------------------->
      <Suspense>
        <!-- component with nested async dependencies -->
        <div
          class="p-5 lg:p-8 border-2 border-solid border-chelsea-blue flex flex-col gap-10"
        >
          <div class="flex justify-between items-center">
            <h2
              class="text-card-heading text-chelsea-blue text-center font-extrabold"
            >
              TOKYO
            </h2>

            <!-- modal open button  -->
            <button
              class="bg-chelsea-blue px-6 py-2 text-white rounded-md"
              @click="showTkyModal = !showTkyModal"
            >
              Rain
            </button>
          </div>

          <!-- temperature component -->
          <TokyoTempCard />

          <!-- rain modal  -->
          <TokyoRainModal
            v-show="showTkyModal"
            @close-modal="showTkyModal = !showTkyModal"
          />
        </div>
        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'HomeView',

    data: () => {
      return {
        showBpModal: false,
        showLndnModal: false,
        showNyModal: false,
        showTkyModal: false,
      }
    },

    components: {
      TemperatureCard: require('@/components/temperature/TemperatureCard.vue')
        .default,
      LondonTempCard: require('@/components/temperature/LondonTempCard.vue')
        .default,
      BudapestTempCard: require('@/components/temperature/BudapestTempCard.vue')
        .default,
      LondonTempCard: require('@/components/temperature/LondonTempCard.vue')
        .default,
      NyTempCard: require('@/components/temperature/NyTempCard.vue').default,
      TokyoTempCard: require('@/components/temperature/TokyoTempCard.vue')
        .default,
      BpestRainModal: require('@/components/rain/BpestRainModal.vue').default,
      LondonRainModal: require('@/components/rain/LondonRainModal.vue').default,
      NyRainModal: require('@/components/rain/NyRainModal.vue').default,
      TokyoRainModal: require('@/components/rain/TokyoRainModal.vue').default,
    },

    mounted() {
      this.$store.dispatch('fetchBudapest')
      this.$store.dispatch('fetchLondon')
      this.$store.dispatch('fetchNewYork')
      this.$store.dispatch('fetchTokyo')
    },
  }
</script>

<style lang="scss">
  #app-title {
    font-family: 'Archivo Black', sans-serif;
  }

  canvas {
    max-height: 25vh;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000da;
    .modal {
      text-align: center;
      background-color: white;
      width: 70vw;
      @media (max-width: 992px) {
        width: 90vw;
      }
      height: auto;
      border-radius: 1rem;
      canvas {
        max-height: 50vh;
      }
    }
  }

  hr {
    margin: 2rem;
  }
</style>
