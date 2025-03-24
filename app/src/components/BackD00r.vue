<template>
  <div>
    <canvas id="agencyChart"></canvas>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { ref, onMounted } from 'vue'

const myChart = ref(null)
const agencyCounts = ref({})

async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/t7p9-n9dy.json?$limit=128')
    const data = await response.json()

    data.forEach((item) => {
      const agency = item.agency || 'Unknown'
      if (!agencyCounts.value[agency]) {
        agencyCounts.value[agency] = 0
      }
      agencyCounts.value[agency]++
    })

    renderChart()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function renderChart() {
  const ctx = document.getElementById('agencyChart').getContext('2d')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(agencyCounts.value),
      datasets: [
        {
          label: 'Number of Requests per Agency',
          data: Object.values(agencyCounts.value),
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}

onMounted(getData)
</script>

<style scoped></style>
