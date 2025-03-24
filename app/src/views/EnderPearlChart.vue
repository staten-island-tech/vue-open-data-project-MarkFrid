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
        to="/IAmSteve"
        class="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button
          class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
        >
          Which agency was this solved by???????
        </button>
      </RouterLink>
    </FriedChicken>
    <ChickenJockey />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CartiApi from '../components/CartiApi.vue'
import FriedChicken from '@/components/FriedChicken.vue'
import ChickenJockey from '@/components/ChickenJockey.vue'

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
