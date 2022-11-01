<template>
  <div class="modal-overlay">
    <div class="modal p-5 lg:p-8 flex flex-col gap-10">
      <div class="flex justify-between items-center">
        <h2
          class="text-card-heading text-chelsea-blue text-center font-extrabold"
        >
          TOKYO
        </h2>

        <!-- modal open button  -->
        <button
          class="bg-primary-orange py-1 px-3 text-white rounded-md flex justify-center items-center"
          @click="$emit('close-modal')"
        >
          X
        </button>
      </div>
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { mapGetters } from 'vuex';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters(['tokyoDays', 'tokyoRain']), //ezt nem használod sehol sem, törölhető
    chartData() {
      return {
        labels: this.$store.getters.tokyoDays,
        datasets: [
          {
            label: 'Rain in mm',
            backgroundColor: '#034694',
            data: this.$store.getters.tokyoRain,
          },
        ],
      };
    },
    chartOptions: {
      responsive: true,
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
