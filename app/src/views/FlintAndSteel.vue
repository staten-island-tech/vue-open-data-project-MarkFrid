<template>
  <div>
    <FriedChicken>
      <RouterLink
        to="/EnderPearl"
        class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button
          class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
        >
          Average Dispath Time
        </button>
      </RouterLink>
      <RouterLink
        to="/IAmSteve"
        class="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button
          class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
        >
          Which agency was this solved by???????
        </button>
      </RouterLink></FriedChicken
    >
    <div class="bg-red-700 flex flex-wrap justify-center overflow-y-auto">
      <CartiApi v-for="call in calls" :key="call.unique_key" :call="call" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CartiApi from '../components/CartiApi.vue'
import BackD00r from '@/components/BackD00r.vue'
import FriedChicken from '@/components/FriedChicken.vue'

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
