<template>
  <div
    class="border-2 border-black shadow-lg w-[28vw] h-[30vh] flex flex-col items-center justify-center p-6 mt-5 ml-5 mr-5 bg-slate-300 rounded-lg"
  >
    <h2 class="text-lg font-semibold text-gray-700 mt-2">{{ call.final_incident_type }}</h2>
  </div>
</template>

<script setup>
defineProps(['call'])
</script>

<style scoped></style>
