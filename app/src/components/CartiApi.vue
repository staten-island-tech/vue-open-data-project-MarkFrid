<template>
  <div></div>
</template>

<script>
const URL = 'https://data.cityofnewyork.us/resource/t7p9-n9dy.json?$limit=1000'
async function getData(URL) {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default {
  setup() {
    return {}
  },
}
</script>

<style scoped></style>
