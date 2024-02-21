<template>
  <div class="card w-96 bg-base-100 shadow-xl event-card">
    <figure>
      <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.station?.title }}</h2>
      <p>{{ props.station?.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type StationItem } from '@/type'

const props = defineProps({
  station: {
    type: Object as PropType<StationItem>,
    require: true
  }
})
</script>

<style scoped>
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
