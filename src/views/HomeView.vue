<template>
  <div class="home max-h-screen bg-slate-500">
    <div class="city-cards-container">
      <Suspense>
        <!-- component with nested async dependencies -->
        <BudapestCard />
        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>

      <Suspense>
        <!-- component with nested async dependencies -->
        <LondonCard />
        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>

      <Suspense>
        <!-- component with nested async dependencies -->
        <NewYorkCard />
        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>

      <Suspense>
        <!-- component with nested async dependencies -->
        <TokyoCard />
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

  components: {
    BudapestCard: require('@/components/BudapestCard.vue').default,
    LondonCard: require('@/components/LondonCard.vue').default,
    NewYorkCard: require('@/components/NewYorkCard.vue').default,
    TokyoCard: require('@/components/TokyoCard.vue').default,
  },

  mounted() {
    this.$store.dispatch('fetchBudapest');
    this.$store.dispatch('fetchLondon');
    this.$store.dispatch('fetchNewYork');
    this.$store.dispatch('fetchTokyo');
  },
};
</script>

<style>
body {
  font-family: 'Lucida Sans', sans-serif;
}

div {
  margin-bottom: 10px;
}

.city-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 3rem;
  padding: 5rem;
}

.city-card {
  padding: 2rem;
  border: 2px solid #034694; /* Chelsea Blue */
}

.city-card-title {
  color: #034694;
  font-style: bold;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

canvas {
  max-height: 25vh;
}
</style>
