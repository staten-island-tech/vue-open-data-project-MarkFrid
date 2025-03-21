<template>
  <div>
    <CartiApi v-for="call in calls" :key="call.unique_key" :call="call" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CartiApi from '../components/CartiApi.vue'

const URL = 'https://data.cityofnewyork.us/resource/t7p9-n9dy.json?$limit=128'
const calls = ref([])

async function getData() {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    calls.value = data
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
