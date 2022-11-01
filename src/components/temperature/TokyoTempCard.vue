<template>
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
    ...mapGetters(['tokyoDays', 'tokyoTemp']), //ezt nem használod sehol sem, törölhető
    chartData() {
      return {
        labels: this.$store.getters.tokyoDays,
        datasets: [
          {
            label: 'Temperature in °C',
            backgroundColor: 'orange',
            data: this.$store.getters.tokyoTemp,
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
