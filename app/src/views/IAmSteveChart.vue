<template>
  <div>
    <FriedChicken>
      <RouterLink
        to="/"
        class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button
          class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
        >
          Return To Home
        </button>
      </RouterLink>
      <RouterLink
        to="/EnderPearl"
        class="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button
          class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
        >
          Average Dispatch Time
        </button>
      </RouterLink></FriedChicken
    >
    <BackD00r />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
</script>

<style scoped></style>
