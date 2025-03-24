<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { ref, onMounted } from 'vue'
const myChart = ref(null)

let lessOneSec = ref(0),
  oneToTwoSec = ref(0),
  twoToThreeSec = ref(0),
  threeToFourSec = ref(0),
  fourToFiveSec = ref(0),
  moreThanFiveSec = ref(0)

async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/t7p9-n9dy.json?$limit=128')
    const data = await response.json()

    data.forEach((item) => {
      const dispatchTime = parseFloat(item.average_dispatch) || 0
      if (dispatchTime < 1) lessOneSec.value++
      else if (dispatchTime < 2) oneToTwoSec.value++
      else if (dispatchTime < 3) twoToThreeSec.value++
      else if (dispatchTime < 4) threeToFourSec.value++
      else if (dispatchTime < 5) fourToFiveSec.value++
      else moreThanFiveSec.value++
    })

    renderChart()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function renderChart() {
  const ctx = document.getElementById('myChart').getContext('2d')

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['<1', '1-2', '2-3', '3-4', '4-5', '>5'],
      datasets: [
        {
          label: 'Average Dispatch Times',
          data: [
            lessOneSec.value,
            oneToTwoSec.value,
            twoToThreeSec.value,
            threeToFourSec.value,
            fourToFiveSec.value,
            moreThanFiveSec.value,
          ],
          backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(255, 165, 0)',
            'rgb(255, 255, 0)',
            'rgb(0, 128, 0)',
            'rgb(0, 0, 255)',
            'rgb(128, 0, 128)',
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
      aspectRatio: 1,
    },
  })
}

onMounted(getData)
</script>

<style scoped></style>
